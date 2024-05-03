import { DAG } from "./src/DAG";
import { BashOperator } from "./src/operators/bashOperator/BashOperator";

const dag1 = new DAG("downloadRocketLaunches", new Date(), "");
console.log(dag1);

const bash = new BashOperator("", "ls", dag1);
bash.runCommand();
