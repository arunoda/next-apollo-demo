import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Contacts from '../components/Contacts';
import { useContactsQuery } from '../generated/graphql'


const limit = 20;

const Contact = () => {
    const [hasMore, setHasMore] = useState(true);
    const { loading, error, data, fetchMore }: any = useContactsQuery({
        variables: {
            limit,
            offset: 0
        }
    })
    const fetchMoreData = () => {
        fetchMore({
            variables: {
                limit: limit,
                offset: data!.contacts.length
            },
            updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
                if (!fetchMoreResult) {
                    return previousResult;
                }
                if (fetchMoreResult.contacts.length < limit) {
                    setHasMore(false);
                }
                return {
                    ...previousResult,
                    contacts: [...previousResult.contacts, ...fetchMoreResult.contacts]
                }
            }
        })
    }
    return (
        <ContactContainer>
            <h2>Contacts</h2>
            {
                loading ? <MessageContainer>...loading</MessageContainer> :
                    error ? <MessageContainer>Oops Something went wrong :(</MessageContainer> :
                        (<><Contacts data={data} />
                            <BottomContainer>
                                <Button variant="outlined" color="primary" disabled={!hasMore} onClick={fetchMoreData}>Show More</Button>
                            </BottomContainer></>
                        )}
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
export default Contact;