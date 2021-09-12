import { Grid, Typography } from '@mui/material';

import { CardPersons } from './CardPersons';
import { ErrorMessage } from './ErrorMessage';
import { GET_PERSONS } from '../graphql/getPersonsQuery';
import { TPersons } from '../interfaces/interfaces';
import { useQuery } from '@apollo/client';

export const PersonsGrid = () => {
  const { loading, error, data } = useQuery(GET_PERSONS, { variables: { offset: 0, limit: 20 } });

  if (loading) return <p>Loading ...</p>;
  if (error) return <ErrorMessage />;

  if (data) {
    const { persons }: { persons: TPersons } = data;
    return (
      <>
        <Grid container spacing={5}>
          <CardPersons firstPersons={persons} />
        </Grid>
      </>
    );
  }

  return <></>;
};
