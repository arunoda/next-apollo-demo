type User = {
  id?: string;
  address: {
    building: string;
    street: string;
    city: string;
    region: string;
    country: string;
    postCode: string;
  },
  name: {
    firstName: string;
    lastName: string;
  },
  phone: {
    countryCode: string;
    number: string;
  },

}