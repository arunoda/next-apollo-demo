import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
]

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderBrand>
                Next Apollo Demo
            </HeaderBrand>
            <HeaderLinks>
                {
                    links.map((link, id) => (
                        <Link href={link.href} key={id}><a>{link.label}</a></Link>
                    ))
                }
            </HeaderLinks>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display:flex;
    position:sticky;
    width:auto;
    color:black;
    border-bottom:1px solid black;
    height:40px;
    align-items:center;
    justify-content:space-between;
    padding: 1rem 1rem;
    z-index: 50;
`
const HeaderBrand = styled.h2`

`;

const HeaderLinks = styled.div`
     display: flex;
    list-style: none;
    align-items: center;
    justify-content: flex-end;
    > a {
        margin: 1.5rem;
        text-decoration: none;
        color: #000;
        display: flex;
        align-items: center;
        font-size: 1rem;
        cursor: pointer;
        &:hover{
          color:#3f51b5;
        }
        &:active{
            color:#3f51b5;
        }
    }
`

export default Header;