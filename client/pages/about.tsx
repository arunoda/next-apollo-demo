import { Box, Link, Typography } from '@mui/material';

const about = () => (
  <>
    <Box padding="20px">
      <Typography textAlign="center" fontSize="28px" color="black" fontFamily="Roboto" variant="h1" fontWeight={700}>
        The spec is partially done with the following features
      </Typography>
    </Box>
    <Box display="flex" flexDirection="column">
      <Typography fontSize="20px" color="black" fontFamily="Roboto" variant="h1" fontWeight={700}>
        <Link href="https://github.com/aminerezgui/next-apollo-demo.git" target='_blank'>
          - Fork the repo: https://github.com/arunoda/next-apollo-demo This is a basic app using Next.js and Apollo
          GraphQL.
        </Link>
      </Typography>
      <Typography fontSize="20px" color="black" fontFamily="Roboto" variant="h3" fontWeight={700}>
        - We would like you to update Next.js, React, Apollo GraphQL to the latest versions.
      </Typography>
      <Typography fontSize="20px" color="black" fontFamily="Roboto" variant="h3" fontWeight={700}>
        - Refactor the code as deemed fit. Brownie points if you use some of the latest features of react like Hooks,
        Suspense Lazy etc. More brownie points if you use TypeScript.
      </Typography>
      <Typography fontSize="20px" color="black" fontFamily="Roboto" variant="h3" fontWeight={700}>
        - Create a GraphQL Query and Resolver that will generate a dummy list of about 2000 names with their addresses, email and phone numbers.
      </Typography>
      <Typography fontSize="20px" color="black" fontFamily="Roboto" variant="h3" fontWeight={700}>
        - Create a New Page in Nextjs where you display these names and addresses as a grid of card tiles. The page
        needs to be responsive.
      </Typography>
      <Typography fontSize="20px" color="black" fontFamily="Roboto" variant="h3" fontWeight={700}>
        - Implement Lazyloading / Infinite scrolls so that you load 20 cards each time you click a ‘Load More’ button,
        which you would need to create.
      </Typography>
      <Typography fontSize="20px" color="black" fontFamily="Roboto" variant="h3" fontWeight={700}>
        - Deploy your App on Heroku. And send us a link to the app.
      </Typography>
    </Box>
  </>
);

export default about;
