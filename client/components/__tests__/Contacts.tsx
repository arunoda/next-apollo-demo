import React from 'react';
import { render, cleanup, waitFor } from "@testing-library/react";
import Contacts from '../Contacts';
import '@testing-library/jest-dom';

describe("Contacts Component", () => {
    afterEach(cleanup);
    describe("when contacts received from props", () => {
        beforeEach(cleanup)
        const mock: any = {
            contacts: [
                {
                    name: "Nicolette Kris",
                    address: "687 Hanna Knolls Apt. 575\nNicolebury, FL 63262",
                    phone: "721-465-6539",
                    email: "Clementine_Crist@Hayes.com"
                }
            ]
        }
        test("it should show card with details", async () => {
            const { container } = render(
                <Contacts data={mock} />
            )
            await waitFor(() => {
                new Promise(resolve => setTimeout(resolve, 0))
                const text = container.getElementsByTagName('h3')[0].textContent;
                expect(text).toBe('Nicolette Kris')
            })
        })
    })
})