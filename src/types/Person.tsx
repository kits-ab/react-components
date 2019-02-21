import { Contact } from "./Contact"

export interface Person extends Contact {
  id: string
  name: string
  tagLine?: string
  imageSrc?: string
  imageSrcSet?: string
  avatarSrc?: string
  avatarSrcSet?: string
  href?: string
  tags?: string[]
}
