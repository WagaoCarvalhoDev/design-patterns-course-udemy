export class StringBuilder {
  private buffer: string[];

  constructor(initialValue?: string) {
    this.buffer = initialValue ? [initialValue] : [];
  }

  public append(value: string): StringBuilder {
    this.buffer.push(value);
    return this;
  }

  public appendLine(value = ''): StringBuilder {
    this.buffer.push(value + '\n');
    return this;
  }

  public clear(): StringBuilder {
    this.buffer = [];
    return this;
  }

  public toString(): string {
    return this.buffer.join('');
  }
}
