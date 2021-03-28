import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <footer role="contentinfo">
      <StyledFooter>@2021 - Pepa Dom.</StyledFooter>
    </footer>
  );
}

const StyledFooter = styled.div`
  background-color: var(--grey);
  color: var(--offWhite);
  font-size: 14px;
  padding: 2em 0;
  text-align: center;
`;
