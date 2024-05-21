import { DAG } from "./src/DAG";

const dag = new DAG<string>();

const nodeA = dag.addNode("A");
const nodeB = dag.addNode("B");
const nodeC = dag.addNode("C");

dag.addEdge(nodeA, nodeB);
dag.addEdge(nodeB, nodeC);
dag.addEdge(nodeC, nodeA); // throws an error due to cycle
