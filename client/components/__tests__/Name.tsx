import React from 'react';
import { render, cleanup, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { NameDocument } from '../../generated/graphql'
import Name from '../Name';
import '@testing-library/jest-dom';

describe("Contacts Component", () => {
    afterEach(cleanup);
    describe("when loading from query", () => {
        test("it should show loadin message", async () => {
            const { container } = render(
                <MockedProvider>
                    <Name />
                </MockedProvider>
            )
            expect(container.textContent).toBe("...loading")
        })
    })
    describe("when error from query", () => {
        test("it should show error meesage", async () => {
            const mock = {
                request: {
                    query: NameDocument,
                },
                error: new Error("Oops something went wrong")
            }
            const { container } = render(
                <MockedProvider mocks={[mock]} addTypename={false} >
                    <Name />
                </MockedProvider>
            )
            await waitFor(() => {
                new Promise(resolve => setTimeout(resolve, 0))
                expect(container.textContent).toBe("oops! Something went wrong!!")
            })
        })
    })
    describe("when contacts reolved from query", () => {
        beforeEach(cleanup)
        const mock = {
            request: {
                query: NameDocument,
            },
            result: {
                data: {
                    name: "Nicolette Kris",
                }
            }
        }
        test("it should show card with details", async () => {
            const { container } = render(
                <MockedProvider mocks={[mock]} addTypename={false} >
                    <Name />
                </MockedProvider>
            )
            await waitFor(() => {
                new Promise(resolve => setTimeout(resolve, 0))
                const text = container.getElementsByTagName('span')[0].textContent;
                expect(text).toBe('Nicolette Kris')
            })
        })
    })
})