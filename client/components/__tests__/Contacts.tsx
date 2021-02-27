import React from 'react';
import { render, cleanup, waitFor } from "@testing-library/react";

import { MockedProvider } from "@apollo/client/testing";
import { ContactsDocument } from '../../generated/graphql'
import Contacts from '../Contacts';

describe("Contacts Component", () => {
    afterEach(cleanup);
    describe("when loading from query", () => {
        test("it should show loadin message", async () => {
            const { container } = render(
                <MockedProvider>
                    <Contacts limit={10} />
                </MockedProvider>
            )
            expect(container.textContent).toBe("...loading")
        })
    })
    describe("when error from query", () => {
        test("it should show error meesage", async () => {
            const mock = {
                request: {
                    query: ContactsDocument,
                    variables: { limit: 20, offset: 10 }
                },
                error: new Error("Oops something went wrong")
            }
            const { container } = render(
                <MockedProvider mocks={[mock]} addTypename={false} >
                    <Contacts limit={10} />
                </MockedProvider>
            )
            await waitFor(() => {
                new Promise(resolve => setTimeout(resolve, 0))
                expect(container.textContent).toBe("Oops Something went wrong :(")
            })
        })
    })
    describe("when contacts reolved from query", () => {
        beforeEach(cleanup)
        const mock = {
            request: {
                query: ContactsDocument,
                variables: { limit: 20, offset: 0 }
            },
            result: {
                data: {
                    contacts: [
                        {
                            name: "Nicolette Kris",
                            address: "687 Hanna Knolls Apt. 575\nNicolebury, FL 63262",
                            phone: "721-465-6539",
                            email: "Clementine_Crist@Hayes.com"
                        }
                    ]
                }
            }
        }
        test("it should show card with details", async () => {
            const { container } = render(
                <MockedProvider mocks={[mock]} addTypename={false} >
                    <Contacts limit={20} />
                </MockedProvider>
            )
            await waitFor(() => {
                new Promise(resolve => setTimeout(resolve, 0))
                const text = container.getElementsByTagName('h3')[0].textContent;
                expect(text).toBe('Nicolette Kris')
            })
        })
    })
})