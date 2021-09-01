export interface Business {
    businessName: string,
    phoneNumber: string,
    email: string,
    addressGroup: {
        street: string,
        number: string,
        city: string,
        municipality: string,
    },
    geopoint: {
        latitude: number
        longitude: number
    },
    description: string
    type: string,
    socialMedia: string[]
}
