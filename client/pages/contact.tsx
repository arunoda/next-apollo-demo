import React from 'react';
import Contacts from '../components/Contacts';
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactContainer>
            <h2>Contacts</h2>
            <Contacts limit={20} />
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
    background-color:#f5f5f5;  
    > h2{
        display:flex;
        justify-content:center;
        margin:0;
        padding:1rem 1.25rem;
        font-weight:400;
    }
`
export default Contact;