export class Connection {
  private inUse: boolean;

  constructor() {
    this.inUse = false;
  }

  query(sql: string) {
    console.log("Running '" + sql + "' in Connection " + this);
    return '';
  }

  isInUse(): boolean {
    return this.inUse;
  }

  setInUse(status: boolean): void {
    this.inUse = status;
  }
}
