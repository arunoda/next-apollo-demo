import React from 'react';
import { render, screen } from '@testing-library/react';
import Names from '../../components/Names';
import { GET_USERS } from '../../components/Names';
import { MockedProvider } from '@apollo/react-testing';
import '@testing-library/jest-dom';

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Cards', () => {
    const fn = jest.fn()

    it('display loading data until data is loaded', () => {

        render(<MockedProvider><Names /></MockedProvider>)

        const heading = screen.getByText("Loading Data...")

        expect(heading).toBeInTheDocument()
    })

    it('should render cards with info', async () => {
        const userMocks = [{
            request: {
                query: GET_USERS,
                variables: {
                    "first": 20
                },
            },
            result: {
                "data": {
                    "users": {
                        "edges": [
                            {
                                "cursor": "49012589-ba8a-4260-83ba-f8f0c370dae0",
                                "node": {
                                    "fullName": "Callie Koepp",
                                    "address": "3884 West Lodge\nWest Cynthia, NC 03369",
                                    "emailAddress": "Cheyanne.Batz@yahoo.com",
                                    "phoneNumber": "004-181-3148"
                                }
                            },
                            {
                                "cursor": "0765d1ff-542e-40d5-abad-fd862f703054",
                                "node": {
                                    "fullName": "Henderson Toy",
                                    "address": "5516 Denis Flat\nPort Palma, DC 98926",
                                    "emailAddress": "Bradly_Keebler@Brannon.ca",
                                    "phoneNumber": "596-149-0541"
                                }
                            },
                            {
                                "cursor": "5105cda2-ffdf-4c01-9fd4-471c033a06dd",
                                "node": {
                                    "fullName": "Gerald Altenwerth",
                                    "address": "93 Bernhard Ford\nEast Darrel, MN 03054-1052",
                                    "emailAddress": "Cassandre_Frami@hotmail.com",
                                    "phoneNumber": "335-956-8569"
                                }
                            },
                            {
                                "cursor": "fe2b6edc-19c2-46cb-857c-b154bf3542f2",
                                "node": {
                                    "fullName": "Garrett Adams",
                                    "address": "963 Eddie Stravenue Suite 953\nKoelpinberg, MD 20264-8920",
                                    "emailAddress": "Jensen_Weissnat@yahoo.com",
                                    "phoneNumber": "113-237-3068"
                                }
                            },
                            {
                                "cursor": "4432b05f-2458-431c-beba-4a0b72122d48",
                                "node": {
                                    "fullName": "Ruthie Gleichner",
                                    "address": "66 Kari Overpass\nCassinburgh, RI 86723-2590",
                                    "emailAddress": "Corkery.Betty@gmail.com",
                                    "phoneNumber": "115-335-3355"
                                }
                            }
                        ],
                        "pageInfo": {
                            "endCursor": "4432b05f-2458-431c-beba-4a0b72122d48",
                            "hasNextPage": true
                        }
                    }
                }
            }
        }];
        render(<MockedProvider mocks={userMocks} addTypename={false}><Names /></MockedProvider>)

        expect(await screen.findByText("Callie Koepp")).toBeInTheDocument();
    })
})