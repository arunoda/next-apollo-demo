import React from "react";

import About from "../about";
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("About Page", () => {
  
   let wrapper;
   
   describe('About Page', () => {
       beforeEach(()=>{
        wrapper = shallow(<About></About>)
       })

       it('should render the about page correctly', () => {   
         
           expect(wrapper.find('div').find('p').text().includes('About Page')).toBe(true);
        
        });
        it('should have back button', () => {              
            expect(wrapper.find('div').find('Link').find('a').text().includes('Go Back')).toBe(true);   
            
         
       });
      

      


   })
});