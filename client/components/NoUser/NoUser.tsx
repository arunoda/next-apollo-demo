import React from "react";
import styled from '@emotion/styled';


const NoUser = () => {
    return (
        <Empty>
            <p>
                Sorry, No User Found!
            </p>
        </Empty>
    )
}

export default NoUser


const Empty = styled.div`
font-size: var(--font-size-p);
display: flex;
justify-content: center;
@media only screen and (max-width: 4000px){
font-size: var(--font-size-p-small);
}
`;