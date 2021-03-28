import React from 'react';
import styled from 'styled-components';

const Grid = ({children}) => <StyledGrid>{children}</StyledGrid>;

export default Grid;

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
