import { Box, Button, Grid } from '@mui/material';
import { ICardPersons, TPersons } from '../interfaces/interfaces';

import { CardPerson } from './CardPerson';
import { GET_PERSONS } from '../graphql/getPersonsQuery';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

export const CardPersons = ({ firstPersons }: ICardPersons) => {
  const [offset, setOffset] = useState<number>(20);
  const [AllPersons, setAllPersons] = useState<TPersons>(firstPersons);

  const { fetchMore } = useQuery(GET_PERSONS, {
    skip: true,
  });

  const loadMorePersons = async () => {
    const { persons }: { persons: TPersons } = (
      await fetchMore({
        query: GET_PERSONS,
        variables: { offset, limit: 20 },
      })
    ).data;

    setAllPersons([...AllPersons, ...persons]);
    setOffset(offset + 20);
  };

  return (
    <>
      {AllPersons.map(person => (
        <Grid item xs={12} md={4} lg={3} key={person.id}>
          <CardPerson
            id={person.id}
            name={person.name}
            address={person.address}
            email={person.email}
            phone={person.phone}
          />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center">
          <Button onClick={loadMorePersons}>Load More</Button>
        </Box>
      </Grid>
    </>
  );
};
