![NPM version](https://img.shields.io/badge/npm-v7.23.0-blue.svg)
![Node version](https://img.shields.io/badge/node-v14-blue.svg)

# NEXT JS WITH GRAPHQL & APOLLO

Welcome to the Next GraphQL Apollo Demo

<details>
<summary>Features</summary>

- [Update both client and server packages with latest versions](#update-both-client-and-server-packages-with-latest-versions)
- [React Hooks](#react-hooks)
- [GraphQL Query and Resolver](#graphql-and-resolver)
- [New page in NextJS](#new-page-in-nextjs)
- [Lazy loading to load](#lazy-loading-to-load)
- [Unit tests using Jest and React Testing Library](#unit-test-using-jset-and-react-testing-library)
- [Dockerize the server and client app and use docker-compose](#Dockerize-the-server-and-client-app-and-use-docker-compose)
- [Cypress end to end test for the page created](#cypress-end-to-end-test-for-the-page-create)
</details>

## Setting up

### Run the packages

Navigate to your client/server apps and run

```
npm i
```

### Up and Run the Server

Navigate to /server

```
npm run start
```

### Start Client front-end app

Navigate to /client

```
npm run dev
```

## Test the client

```
npm run test
```

### Apollo Server:

`http://localhost:4000/graphql`,

### Client front-end app:

`http://localhost:3000/user-info`,

### Cypress for end-to-end testing

```
npm run cypress
```

## Getting Started with docker-compose

- Prerequisite: Docker

- Installing docker-compose

```
npm i docker-compose
```

### Steps to run app locally

```
docker-compose up --build
docker-compose up
```

After success docker UP

- App or UI will run on `http://localhost:3000`
- GraphQL server will run on `http://localhost:4000/graphql`
