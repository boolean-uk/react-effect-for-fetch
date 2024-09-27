export interface Art {
    id: number
    title: string
    artist: string
    imageURL: string
    publicationHistory: string[]
}

export interface SingleAdvice {
  slip: {
    id: string
    advice: string
  }
}

export interface User {
  firstName: string
  lastName: string
  street: string
  city: string
  gender: string
  email: string
  jobTitle: string
  latitude: number
  longitude: number
  favouriteColour: string
  profileImage: string
}