import casual from 'casual';
import { v4 as uuidv4 } from 'uuid';

export function generateUsers(amount: number): Array<User> {
  const users:Array<User> = [];
  for (let i = 0; i < 2000; i++) {
    users.push({
      id: uuidv4(),
      name: {
        firstName: casual.first_name,
        lastName: casual.last_name,
      },
      phone: {
        countryCode: casual.country_code,
        number: casual.phone,
      },
      address: {
        building: casual.building_number,
        street: casual.street,
        city: casual.city,
        region: casual.state,
        country: casual.country,
        postCode: casual.zip(5)
      }
    })
  }
  return users;
}