# Nick Morgan Technical Test

### Technical Test Checklist:
- [x] Fork the repo: https://github.com/arunoda/next-apollo-demo This is a basic app using Next.js & Apollo GraphQL.
- [x] We would like you to update Next.js, React, Apollo GraphQL to the latest versions.
- [ ] Refactor the code as deemed fit. Brownie points if you use some of the latest features of react like Hooks, Suspense Lazy etc. More brownie points if you use TypeScript.  
- [x] Create a GraphQL Query and Resolver that will generate a dummy list of about 2000 names with their addresses, email and phone numbers. Feel free to use any fake data generator library, btw love https://www.npmjs.com/package/casual
- [ ] Create a New Page in Nextjs where you display these names and addresses as a grid of card tiles.  The page needs to be responsive.
- [ ] Implement Lazyloading  / Infinite scrolls so that  you load 20 cards each time you click a ‘Load More’ button, which you would need to create.  
- [ ] Add Unit Tests using Jest and React Testing Library.
- [ ] Dockerize the server and client app and use docker-compose so that we can run the app locally using docker-compose.
- [ ] Deploy your App on Heroku. And send us a link to the app.
- [ ] Write cypress end to end test for the page you created.

### Package Updates:
I used npm-check-updates to help with this, as it's often safer than just manually upgrading. The following is the success message for the client:

![client-update-image](./assets/client-update.png)

I also took the liberty of updating the server too:

![server-update-image](./assets/server-update.png)

### Refactoring Steps:
- First I added typescript to the `client` and `server`. Then I ran `yarn tsc --init` to generate a `tsconfig.json` file.
- I then changed all the files to `.tsc` and `.ts` respectively.
- I changed the server over to ES6 modules.


### Additional Information:
- I added a package.json to the project root, so I could add global prettier to dev dependencies for development.
- I also added concurrently to the root, so I could run `yarn dev` so the server and client would launch at the same time.
- I changed the server port to `8000` because it's my preference and added `.gitignore` files to the client & server, alongside `.env` files.
- I added a `yarn setup` command on the root file which automatically installs dependencies everywhere.
- I added a package `npm-check-updates` to safely update dependencies to the latest versions.
- I added an assets file to add images to the `README.md`.

