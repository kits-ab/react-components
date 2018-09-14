import { Email } from "./Email"
import { PhoneNumber } from "./PhoneNumber"
import { PostalCode } from "./PostalCode"
import { Social } from "./Social"

export interface Contact {
  name?: string
  role?: string
  street?: string
  postalCode?: PostalCode
  city?: string
  phone?: PhoneNumber
  email?: Email
  social?: Social
}
