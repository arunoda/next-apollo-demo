## Next Apollo Demo

An application demonstrating a simple Next JS application using Apollo and GraphQL to fetch data.

## Project Status
- [x] Fork the repo: https://github.com/arunoda/next-apollo-demo This is a basic app using Next.js &amp; Apollo GraphQL.
- [x] We would like you to update Next.js, React, Apollo GraphQL to the latest versions.
- [x] Refactor the code as deemed fit. Brownie points if you use some of the latest
features of react like Hooks, Suspense Lazy etc. More brownie points if you use
TypeScript.
- [x] Create a GraphQL Query and Resolver that will generate a dummy list of about 2000
names with their addresses, email and phone numbers. Feel free to use any fake
data generator library, btw love https://www.npmjs.com/package/casual
- [x] Create a New Page in Nextjs where you display these names and addresses as a grid
of card tiles. The page needs to be responsive.
- [x] Implement Lazyloading / Infinite scrolls so that you load 20 cards each time you
click a ‘Load More’ button, which you would need to create.
 Add Unit Tests using Jest and React Testing Library.
 Dockerize the server and client app and use docker-compose so that we can run the
app locally using docker-compose.
 Deploy your App on Heroku. And send us a link to the app.
 Write cypress end to end test for the page you created.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine. 

This repo contains both a server and a client, which each run individually. The set up instructions for each are:

### Server:  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Start in dev mode (hot reloading)

`npm run dev`

### Client:  

Installation:

`npm install`  

Environment variables:

Create a file called `.env.local`

To work with the server locally, add this content to the file:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/graphql
```

To start in dev mode: 

`npm run dev`

To build and start:

`npm run build`
`npm run start`