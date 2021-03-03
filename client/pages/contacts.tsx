import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import ContactsGroup from '../components/ContactsGroup';
import ScrollToTop from '../components/ScrollToTop';
import { getContacts } from '../graphql/apis';
import { Contact } from '../generated/graphql'
const limit = 20;

interface Props {
    data: Contact[] | null,
    error: boolean | null
}

export async function getStaticProps() {
    const { data, error } = await getContacts(limit, 0);
    return {
        props: {
            data: data || null,
            error: error || null
        }
    }
}

const Contacts = ({ data, error }: Props) => {
    const [hasMore, setHasMore] = useState(true);
    const [contacts, setContacts] = useState(data);
    
    const fetchMoreData = async () => {
        const { data } = await getContacts(limit, contacts!.length);
        setContacts([...contacts!, ...data!])
        if (data!.length < limit) {
            setHasMore(false);
        }
    }
    return (
        <ScrollToTop>
            <ContactContainer>
                <h2>Contacts</h2>
                {
                    error ? <MessageContainer>Oops Something went wrong :(</MessageContainer> :
                        (<>
                            <ContactsGroup contacts={contacts} />
                            <BottomContainer>
                                <Button variant="outlined" color="primary" disabled={!hasMore} onClick={fetchMoreData}>Show More</Button>
                            </BottomContainer>
                        </>
                        )}
            </ContactContainer>
        </ScrollToTop>
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
const MessageContainer = styled.div`
    width:100%;
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
`
const BottomContainer = styled.div`
    display:flex;
    justify-content:center;
    background-color:#f5f5f5;
    padding:10px 0px 20px 0px;
`
export default Contacts;