import React from "react";
import CardList from "../CardList";
import { render, cleanup } from '@testing-library/react';


describe("Card List", () => {
    const props = {
        users: [{
            name: "Ruapli",
        }]
    }
    describe('should render cardlist', () => {
        const { getByTestId } = render(<CardList {...props} />);
        it('should render the CardTitle correctly with name', () => {
            expect(getByTestId('title').textContent).toEqual(props.users[0].name);
        });

    })
});