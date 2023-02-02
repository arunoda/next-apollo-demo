import React from "react";
import styled from '@emotion/styled';


const Button = () => {
    return (
        <ButtonWrapper type="button">
            Load more...
        </ButtonWrapper>
    )
}

export default Button


const ButtonWrapper = styled.button`
background-color: var(--dark-purple);
color: var(--white);
outline: 0;
border: 0;
-webkit-appearance: button;
cursor: pointer;
font-size: var(--font-size-p);
border-radius: 5px;
padding: 1rem 2rem;
margin-top: 3rem;
@media only screen and (max-width: 4000px){
font-size: var(--font-size-p-small);
padding: 1rem;
}
`;