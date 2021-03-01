import React from 'react';
import {useNameQuery} from '../generated/graphql';

const Name = () => {
  const {loading,error,data}:any=useNameQuery();
  return(
    <span>
      {loading? '...loading' : error ? 'oops! Something went wrong!!' :
      data.name}
    </span>
  )
}

export default Name;
