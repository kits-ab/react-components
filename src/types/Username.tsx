import { SocialType } from "./SocialType"

export class Username {
  private readonly username: string
  private readonly type: SocialType

  constructor(username: string, type: SocialType) {
    this.username = username
    this.type = type
  }

  public toLink() {
    switch (this.type) {
      case SocialType.Facebook:
        return `https://facebook.com/${this.username}`
      case SocialType.GitHub:
        return `https://github.com/${this.username}`
      case SocialType.Keybase:
        return `https://keybase.io/${this.username}`
      case SocialType.LinkedIn:
        return this.username
      case SocialType.MicroBlog:
        return `https://micro.blog/${this.username}`
      case SocialType.Twitter:
        return `https://twitter.com/${this.username}`
      default:
        return "https://kits.se"
    }
  }

  public toString() {
    return this.type
  }
}
