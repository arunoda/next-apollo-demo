import React, { useState } from 'react'
import { useContactsQuery } from '../generated/graphql'
import Card from './Card';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { ArrowUpwardRounded } from '@material-ui/icons';

type Props = {
    limit: number
}
const Contacts = ({ limit }: Props) => {
    const [hasMore, setHasMore] = useState(true);
    const { loading, error, data, fetchMore } = useContactsQuery({
        variables: {
            limit,
            offset: 0
        }
    })

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            {
                loading ? '...loading' :
                    error ? <ErrorContainer>Oops Something went wrong :(</ErrorContainer> :
                        <>
                            <ContactsContainer>
                                {
                                    data!.contacts.map((contact, id) => (
                                        <Card data={contact} key={id} />
                                    ))
                                }
                            </ContactsContainer>
                            <TopArrowIcon onClick={scrollToTop} />
                            <BottomContainer>
                                <Button variant="outlined" color="primary" disabled={!hasMore} onClick={() => {
                                    fetchMore({
                                        variables: {
                                            limit: 20,
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
                                }}>Show More</Button>
                            </BottomContainer>
                        </>
            }
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
const BottomContainer = styled.div`
    display:flex;
    justify-content:center;
    background-color:#f5f5f5;
    padding:10px 0px 20px 0px;
`
const ErrorContainer = styled.div`
    width:100%;
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
`
const TopArrowIcon = styled(ArrowUpwardRounded)`
    position:absolute;
    color:white;
    right:30px;
    font-size:30px!important;
    background-color:#3f51b5;
    border-radius:20px;
    cursor: pointer;
`


export default Contacts
