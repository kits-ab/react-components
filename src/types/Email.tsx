export class Email {
  private address: string

  constructor(address: string) {
    this.address = address
  }

  toLink() {
    return `mailto:${this.address}`
  }

  toString() {
    return this.address
  }
}
