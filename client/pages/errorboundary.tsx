import React from "react";
import styled from '@emotion/styled';


const Errorboundary = () => {
    return (
        <ErrorWrapper>
             <p>An Error occured</p>
        </ErrorWrapper>
    )
}

export default Errorboundary


const ErrorWrapper = styled.div`
display: flex;
justify-content:center;

`;