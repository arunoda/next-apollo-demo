import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react

import CardList from "../CardList";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("Card List", () => {

    let wrapper;
    const props = {
        users: [{
            name: "Ruapli",


        }]
    }
    describe('Title', () => {
        beforeEach(() => {
            wrapper = shallow(<CardList {...props}></CardList>)
        })

        it('should render the CardTitle correctly with name', () => {

            expect(wrapper.find('Card').find('CardTitle').text().includes('Ruapli')).toBe(true);



        });


    })
});