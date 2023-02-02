import React from "react";
import styled from '@emotion/styled';


const SkeletonLoader = () => {
    return (
        <Skeleton className="skeleton">
             <div className="skeleton__details">
               <h4 className="skeleton__details-name"></h4>
              <p className="skeleton__details-email"></p>
              <p className="skeleton__details-phone"></p>
              <p className="skeleton__details-address"></p> 
            </div>
        </Skeleton>
    )
}

export default SkeletonLoader


const Skeleton = styled.div`
background-color: #f2f2f2;
width: 100%;
margin: auto;
border: 0;
min-height:100px;
border-radius: 3px;
& .skeleton__details-name {
    padding: 1rem 2rem;
    line-height: 1.6;
    animation: skeleton-loading 1s linear infinite alternate;
    width: 70%;
    height: 0.7rem;
    border-radius: 0.25rem;
    @media screen and (max-width:680px){
        padding: 0.8rem
    }
}
@keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;