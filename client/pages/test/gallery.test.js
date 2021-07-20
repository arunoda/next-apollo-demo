import React from "react";

import Gallery from "../gallery";
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("Gallery Page", () => {
  
   let wrapper;
   
   describe('Gallery Page', () => {
       beforeEach(()=>{
        wrapper = shallow(<Gallery></Gallery>)
       })

       
        it('should have back button', () => {              
            expect(wrapper.find('div').find('Link').find('a').text().includes('Go Back')).toBe(true);   
            
         
       });
      

      


   })
});