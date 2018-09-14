### Example with company information

```js
<Contact
  info={{
    name: "KITS AB",
    street: "Norra Allégatan 8",
    postalCode: new types.PostalCode("413 01"),
    city: "Göteborg",
    phone: new types.PhoneNumber("0708-123456"),
    email: new types.Email("info@kits.se"),
    social: {
      facebook: new types.Username("kokitotsos", types.SocialType.Facebook),
      github: new types.Username("kits-ab", types.SocialType.GitHub),
      linkedin: new types.Username("kits-ab", types.SocialType.LinkedIn),
      twitter: new types.Username("kokitotsos", types.SocialType.Twitter)
    }
  }}
  type={types.ContactType.Company}
/>
```

### Example with role information

```js
<Contact
  info={{
    name: "Lorem Ipsum",
    role: "VD",
    phone: new types.PhoneNumber("0708-123456"),
    email: new types.Email("lorem.ipsum@kits.se")
  }}
  type={types.ContactType.Role}
/>
```

### Example with person information

```js
<Contact
  info={{
    name: "Lorem Ipsum",
    phone: new types.PhoneNumber("0708-123456"),
    email: new types.Email("info@kits.se"),
    social: {
      facebook: new types.Username("kokitotsos", types.SocialType.Facebook),
      github: new types.Username("kits-ab", types.SocialType.GitHub),
      linkedin: new types.Username("kits-ab", types.SocialType.LinkedIn),
      keybase: new types.Username("kokitotsos", types.SocialType.Keybase),
      twitter: new types.Username("kokitotsos", types.SocialType.Twitter)
    }
  }}
  type={types.ContactType.Person}
/>
```
