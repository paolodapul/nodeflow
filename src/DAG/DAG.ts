import { Node } from "../Node";

class DAG<T> {
  private nodes: Map<T, Node<T>>;

  constructor() {
    this.nodes = new Map<T, Node<T>>();
  }

  addNode(data: T): Node<T> {
    const node: Node<T> = {
      data,
      children: [],
      visited: false,
      visiting: false,
    }; // Ensure all properties are initialized
    this.nodes.set(data, node);
    return node;
  }

  addEdge(source: Node<T>, destination: Node<T>): void {
    if (!this.nodes.has(source.data) || !this.nodes.has(destination.data)) {
      throw new Error("Nodes don't exist in the DAG");
    }

    // Temporarily add the edge
    source.children.push(destination);

    // Check for cycles
    if (this.hasCycle()) {
      // If a cycle is found, remove the newly added edge
      source.children.pop();
      throw new Error("Adding this edge would create a cycle in the DAG");
    }
  }

  hasCycle(): boolean {
    // Reset all visited and visiting statuses before starting cycle detection
    this.nodes.forEach((node) => {
      node.visited = false;
      node.visiting = false;
    });

    for (const node of this.nodes.values()) {
      if (!node.visited && this.dfsVisit(node)) {
        return true; // Cycle detected
      }
    }
    return false;
  }

  private dfsVisit(node: Node<T>): boolean {
    if (node.visiting) {
      return true; // Cycle detected, currently in the visit path
    }
    if (node.visited) {
      return false; // Already checked this node, no cycle from here
    }

    node.visited = true;
    node.visiting = true; // Mark as currently being visited

    for (const child of node.children) {
      if (this.dfsVisit(child)) {
        return true; // Cycle detected
      }
    }

    node.visiting = false; // Backtrack (remove from current visit path)
    return false;
  }
}

export { DAG };
