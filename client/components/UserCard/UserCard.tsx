import React, { FunctionComponent } from "react";
import styled from '@emotion/styled';

interface UserCardProp {
    user: any
}
const UserCard: FunctionComponent<UserCardProp> = ({user}) => {
    return (
        <Card className="card" data-test-id="user">
            <div className="card__details">
              <h4 className="card__details-name">{user.name}</h4>
              <p className="card__details-email">Email: {user.email}</p>
              <p className="card__details-phone">Phone: {user.phone}</p>
              <p className="card__details-address">address: {user.address}</p>
            </div>
        </Card>
    )
}

export default UserCard


const Card = styled.div`
background-color: var(--dark-purple);
color: var(--white);
width: 100%;
margin: auto;
border: 0;
min-height:100px;
font-size: var(--font-size-p-small);
border-radius: 3px;
& .card__details {
    padding: 1rem 2rem;
    line-height: 1.6;
    @media screen and (max-width:680px){
        padding: 0.8rem
    }
}
`;