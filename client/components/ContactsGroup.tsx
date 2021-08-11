import React from 'react'
import Card from './Card';
import styled from 'styled-components';
import { Contact } from '../generated/graphql'

type Props = {
        contacts: Contact[] | null
}
const ContactsGroup = ({ contacts }: Props) => {
    return (
        <>
            <ContactsContainer>
                {
                    contacts!.map((contact, id) => (
                        <Card data={contact} key={id} />
                    ))
                }
            </ContactsContainer>
        </>
    )
}

const ContactsContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-gap:20px;
    align-items:center;
    height:auto;
    padding:25px 30px;
    @media (max-width: 1232px) {
    grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 950px) {
        grid-template-columns: repeat(2, 1fr);

    }
    @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export default ContactsGroup;
