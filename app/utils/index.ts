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
      }
    })
  }
  return users;
}