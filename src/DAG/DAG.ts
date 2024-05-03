class DAG {
  dagId: string;
  startDate: Date;
  scheduleInterval: string;

  constructor(dagId: string, startDate: Date, scheduleInterval: string) {
    this.dagId = dagId;
    this.startDate = startDate;
    this.scheduleInterval = scheduleInterval;
  }
}

export { DAG };
