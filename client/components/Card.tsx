import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core'
import { HomeOutlined, PhoneIphoneOutlined, EmailOutlined } from '@material-ui/icons'
import { Contact } from '../generated/graphql';

interface Props {
    data: Contact
}

const Card = ({ data }: Props) => {
    return (
        <CardContainer>
            <CardHead>
                <CardAvatar>{data.name.split("")[0]}</CardAvatar>
                <h3>{data.name}</h3>
            </CardHead>
            <h4><EmailOutlined /><span>{data.email}</span></h4>
            <h4><PhoneIphoneOutlined /><span>{data.phone}</span></h4>
            <h4><HomeOutlined /><span>{data.address}</span></h4>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    width:auto;
    background-color:#222831;
    height:250px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    box-shadow:rgba(0,0,0,7);
    color:white;
    padding:1.25rem;
    @media (max-width:1310px){
        max-width:100%;
    }
    > .MuiAvatar-root{
        display:flex;
        align-items:center;
    }
    >h4{
        display:flex;
        font-size:16px;
        margin: 0.5rem 0;
        > span {
            padding:3px 0 0 10px;
            word-break: break-all;
            font-weight:400;
        }
    }
`
const CardHead = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    font-size:17px;
`
const CardAvatar = styled(Avatar)`
    display:flex;
    justify-content:center;
`
export default Card;
