export class PhoneNumber {
  private n: string

  constructor(n: string) {
    const cleanNumber = n.replace("+46", "").replace(/\D/g, "")
    if (cleanNumber.length !== 10) {
      throw Error("Invalid phonenumber, should be 10 digits")
    }
    this.n = cleanNumber
  }

  toLink() {
    return `tel:+46${this.n.substr(1)}`
  }

  toString() {
    const n = this.n
    return `${n.substr(0, 4)} – ${n.substr(4, 2)} ${n.substr(6, 2)} ${n.substr(8, 2)}`
  }
}
