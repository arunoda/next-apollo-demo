import Card from '../Card';
import { cleanup,render } from '@testing-library/react';

describe("Card Component",()=>{
        afterEach(cleanup);
        describe("display Card",()=>{
            test("it should display card with name and match snapshot",async()=>{
                const {container}= render(
                    <Card data={{
                            name: "Nicolette Kris",
                            address: "687 Hanna Knolls Apt. 575\nNicolebury, FL 63262",
                            phone: "721-465-6539",
                            email: "Clementine_Crist@Hayes.com"
                    }} />
                    )
                    expect(container).toMatchSnapshot();
                    const text = container.getElementsByTagName('h3')[0].textContent;
                    expect(text).toBe('Nicolette Kris')
            })
        })
})