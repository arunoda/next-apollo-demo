import React from "react";

import Index from "../index";
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("Index Page", () => {
  
   let wrapper;
   
   describe('Index Page', () => {
       beforeEach(()=>{
        wrapper = shallow(<Index></Index>)
       })

       it('should render the Index page correctly with welcome msg', () => {   
         
           expect(wrapper.find('div').text().includes('Welcome')).toBe(true);
        
        });
        it('should have about and gallery button', () => {              
            expect(wrapper.find('Nav').find('Link').at(0).find('a').text().includes('About')).toBe(true); 
            expect(wrapper.find('Nav').find('Link').at(1).find('a').text().includes('Gallery')).toBe(true);     
            
         
       });
      

      


   })
});