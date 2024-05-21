interface Node<T> {
  data: T;
  children: Node<T>[];
  visited?: boolean; // Track visited state for cycle detection
  visiting?: boolean; // Track nodes currently being visited (for cycle detection)
}

export { Node };
