import React, { FunctionComponent } from "react";
import styled from '@emotion/styled';

export interface ButtonProps{
    onClick: ()=>void
}

const Button: FunctionComponent<ButtonProps>  = ({onClick}) => {
    return (
        <ButtonWrapper type="button" data-testid="more-button" onClick={onClick}>
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