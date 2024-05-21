import { DAG } from "../../DAG";
import { exec } from "child_process";

class BashOperator<T> {
  taskId: string;
  bashCommand: string;
  dag: DAG<T>;

  constructor(taskId: string, bashCommand: string, dag: DAG<T>) {
    this.taskId = taskId;
    this.bashCommand = bashCommand;
    this.dag = dag;
  }

  runCommand() {
    exec(this.bashCommand, (err, stdout, stderr) => {
      if (err) {
        console.log("err: ", err);
      }

      if (stderr) {
        console.log("stderr: ", stderr);
        return;
      }

      console.log("stdout: ", stdout);
    });
  }
}

export { BashOperator };
