export class PhoneNumber {
  private readonly n: string

  constructor(n: string) {
    const cleanNumber = n.replace("+46", "").replace(/\D/g, "")
    if (cleanNumber.length !== 10) {
      throw Error("Invalid phone number, should be 10 digits")
    }
    this.n = cleanNumber
  }

  toLink() {
    return `tel:+46${this.n.substring(1)}`
  }

  toString() {
    const n = this.n
    return `${n.substring(0, 4)} – ${n.substring(4, 6)} ${n.substring(6, 8)} ${n.substring(8, 10)}`
  }
}
