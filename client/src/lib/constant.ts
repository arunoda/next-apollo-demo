import { gql } from '@apollo/client';

export const QUERY = gql`
  query UsersList($count: Int, $page: Int) {
    UsersList(count: $count, page: $page) {
      users {
        address
        phoneNumber
        email
        name
      }
      next
    }
  }
`;

export const uri = process.env.NODE_ENV === 'production' ? 'https://next-apollo-js.herokuapp.com/graphql' : 'http://localhost:4000/graphql';
export const errMessage = 'Something went wrong, Please try again !!';
export const batchCount = 20;
export const userMocks = [
  {
    request: {
      query: QUERY,
      variables: {
        count: 2000,
      },
      fetchPolicy: 'cache-and-network',
      skip: true,
    },
    result: {
      data: {
        UsersList: {
          users: [
            {
              name: 'Donna Gorczany',
              email: 'Jarred_Moore@gmail.com',
              phoneNumber: '(534) 545-3185',
              address: '833 Dalton Square',

              __typename: 'User',
            },
            {
              name: 'Mrs. Mark Ferry',
              email: 'Edd_Wunsch@gmail.com',
              phoneNumber: '(420) 875-9125 x719',
              address: '49533 Morar Spring',
              image: 'https://cdn.fakercloud.com/avatars/kerem_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Sheryl Wilderman',
              email: 'Orrin.Schumm@gmail.com',
              phoneNumber: '249-996-2334 x8403',
              address: '157 Favian Oval',
              image: 'https://cdn.fakercloud.com/avatars/algunsanabria_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Heidi Wiza',
              email: 'Vallie_Gusikowski44@gmail.com',
              phoneNumber: '(228) 529-7503 x9804',
              address: '780 Kiehn Trafficway',
              image: 'https://cdn.fakercloud.com/avatars/giuliusa_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Mr. Melody Crona',
              email: 'Kylie.Wolff@hotmail.com',
              phoneNumber: '708.349.5665 x3156',
              address: '9539 Javonte Alley',
              image: 'https://cdn.fakercloud.com/avatars/_victa_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Donna Gorczany',
              email: 'Jarred_Moore@gmail.com',
              phoneNumber: '(534) 545-3185',
              address: '833 Dalton Square',

              __typename: 'User',
            },
            {
              name: 'Mrs. Mark Ferry',
              email: 'Edd_Wunsch@gmail.com',
              phoneNumber: '(420) 875-9125 x719',
              address: '49533 Morar Spring',
              image: 'https://cdn.fakercloud.com/avatars/kerem_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Sheryl Wilderman',
              email: 'Orrin.Schumm@gmail.com',
              phoneNumber: '249-996-2334 x8403',
              address: '157 Favian Oval',
              image: 'https://cdn.fakercloud.com/avatars/algunsanabria_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Heidi Wiza',
              email: 'Vallie_Gusikowski44@gmail.com',
              phoneNumber: '(228) 529-7503 x9804',
              address: '780 Kiehn Trafficway',
              image: 'https://cdn.fakercloud.com/avatars/giuliusa_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Mr. Melody Crona',
              email: 'Kylie.Wolff@hotmail.com',
              phoneNumber: '708.349.5665 x3156',
              address: '9539 Javonte Alley',
              image: 'https://cdn.fakercloud.com/avatars/_victa_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Donna Gorczany',
              email: 'Jarred_Moore@gmail.com',
              phoneNumber: '(534) 545-3185',
              address: '833 Dalton Square',

              __typename: 'User',
            },
            {
              name: 'Mrs. Mark Ferry',
              email: 'Edd_Wunsch@gmail.com',
              phoneNumber: '(420) 875-9125 x719',
              address: '49533 Morar Spring',
              image: 'https://cdn.fakercloud.com/avatars/kerem_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Sheryl Wilderman',
              email: 'Orrin.Schumm@gmail.com',
              phoneNumber: '249-996-2334 x8403',
              address: '157 Favian Oval',
              image: 'https://cdn.fakercloud.com/avatars/algunsanabria_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Heidi Wiza',
              email: 'Vallie_Gusikowski44@gmail.com',
              phoneNumber: '(228) 529-7503 x9804',
              address: '780 Kiehn Trafficway',
              image: 'https://cdn.fakercloud.com/avatars/giuliusa_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Mr. Melody Crona',
              email: 'Kylie.Wolff@hotmail.com',
              phoneNumber: '708.349.5665 x3156',
              address: '9539 Javonte Alley',
              image: 'https://cdn.fakercloud.com/avatars/_victa_128.jpg',
              __typename: 'User',
            },
          ],
          next: false,
        },
      },
    },
  },
  {
    request: {
      query: QUERY,
      variables: {
        count: 10,
        page: 1,
      },
    },
    result: {
      data: {
        UsersList: {
          users: [
            {
              name: 'Donna Gorczany',
              email: 'Jarred_Moore@gmail.com',
              phoneNumber: '(534) 545-3185',
              address: '833 Dalton Square',

              __typename: 'User',
            },
            {
              name: 'Mrs. Mark Ferry',
              email: 'Edd_Wunsch@gmail.com',
              phoneNumber: '(420) 875-9125 x719',
              address: '49533 Morar Spring',
              image: 'https://cdn.fakercloud.com/avatars/kerem_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Sheryl Wilderman',
              email: 'Orrin.Schumm@gmail.com',
              phoneNumber: '249-996-2334 x8403',
              address: '157 Favian Oval',
              image: 'https://cdn.fakercloud.com/avatars/algunsanabria_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Heidi Wiza',
              email: 'Vallie_Gusikowski44@gmail.com',
              phoneNumber: '(228) 529-7503 x9804',
              address: '780 Kiehn Trafficway',
              image: 'https://cdn.fakercloud.com/avatars/giuliusa_128.jpg',
              __typename: 'User',
            },
            {
              name: 'Mr. Melody Crona',
              email: 'Kylie.Wolff@hotmail.com',
              phoneNumber: '708.349.5665 x3156',
              address: '9539 Javonte Alley',
              image: 'https://cdn.fakercloud.com/avatars/_victa_128.jpg',
              __typename: 'User',
            },
          ],
          next: true,
        },
      },
    },
  },
];

export interface IUser {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  image: string;
}

interface IUserResponse {
  users: Array<IUser>;
  next: boolean;
}

export interface IUsersList {
  UsersList?: IUserResponse;
}
