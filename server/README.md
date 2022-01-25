# Faker-GraphQL

The server is made with graphQL and faker to provide fake list of users.

## Getting Started

Installing dependencies :

npm i

First, run the development server:

npm run start

Open [http://localhost:5000/graphql](http://localhost:5000/graphql) with your browser to see the result.

Connect the grapgQL sandbox with local graphQL to run queries
Url for sandbox : https://studio.apollographql.com/sandbox/explorer



### Get user list

You can request a list of users. `count` is optional and defaults to 2000.

```graphql
# UsersList($count: Int)

query Users {
  UsersList(count: 9, page: 2) {
    users {
      name
      email
      phoneNumber
      address
      image
    }
    hasNextPage
  }
}

```
