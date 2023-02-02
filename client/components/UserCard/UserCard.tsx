import React from "react";
import styled from '@emotion/styled';


const UserCard = () => {
    return (
        <Card className="card">
            <div className="card__details">
              <h4 className="card__details-name">Adeola Adekoyejo</h4>
              <p className="card__details-email">Email: adekoyejoadeola@gmail.com</p>
              <p className="card__details-phone">Phone: 08151627843</p>
              <p className="card__details-address">Address: 5 crescent, otun akute.</p>
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