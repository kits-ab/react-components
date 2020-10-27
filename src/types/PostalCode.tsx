export class PostalCode {
  private readonly n: string

  constructor(n: string) {
    this.n = n
  }

  public toString() {
    return this.n
  }
}
