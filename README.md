
## **How to run this project with docker locally**
*```Git clone "name of repo"```
*```cd "name of repo"```
*```docker-compose up```

## **Alternative approcah to run project**
*```Git clone "name of repo"```
*```cd "name of repo/server"```
*```npm start```
*```server starts at localhost:4000```

*```cd "name of repo/client"```
*```yarn dev```
*```client starts at localhost:3000```

## **How to run test**
*```yarn test``` in client folder


## **Installation**
 ```eslint-plugin jsx-ally```
```eslint-plugins```
```node-sass```
```apollo-client```
```cypress```  ```jest```

## **Tools Used**
* React, Typescript, SASS, Jest, React Testing Library, Apollo, Nextjs

## **Technical Decision**
* Made use of css preprocessor for consistent theming with variables, for css code to be well maintainable
* Made use of Typescript to ensure a properly defined static type
* Used prettier to format the code
* Wrote unit tests for better quality of code and to find bugs easily and cypress e2e tests
* Made use of rem rather px for font sizes because rem is scalable adding more flexibility to the UI for better accessibility
* Efficient nextjs project folder structure
* Used a11y-plugins to catch accessibility mistakes
* Followed through CI/CD best practices by making meamingful comits often


## **Activities Done**
* Forked required Repo
* Updated Nextjs, React, Apollo, Graphql to the latest version
* Refactor the code as deemed fit. Brownie points if you use some of the latest features of react like Hooks, Suspense Lazy etc. More brownie points if you use TypeScript. 
* Created a GraphQL Query and Resolver that generates a list of dummy data
* Created a New Page in Nextjs where you display these names and addresses as a grid of card tiles.  The page needs to be responsive.
* Add Unit Tests using Jest and React Testing Library.
*  Dockerize the server and client app and use docker-compose so that we can run the app locally using docker-compose.
* Implement Lazyloading  / Infinite scrolls so that  you load 20 cards each time you click a ‘Load More’ button, which you would need to create. 
