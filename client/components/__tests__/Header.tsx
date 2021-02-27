import Header from '../Header';
import { cleanup,render } from '@testing-library/react';

describe("Header Component",()=>{
        afterEach(cleanup);
        describe("display Header",()=>{
            test("it should match snapshot",async()=>{
                const {container}= render(
                    <Header />
                    )
                    expect(container).toMatchSnapshot();
                    const text = container.getElementsByTagName('h2')[0].textContent;
                    expect(text).toBe('Next Apollo Demo')
            })
        })
})