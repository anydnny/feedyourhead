import React from "react";
import styled from "styled-components";

const StyledHeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 10rem;
  padding: 2rem 3rem;
  
  @media ${props => props.theme.media.phone}{
   padding: 2rem;
  }

  @media (min-width: 481px) {
    &::after {
      content: " ";
      width: 10%;
    }
  }
`;
const HeaderNav = ({ children }) => (
  <StyledHeaderNav>{children}</StyledHeaderNav>
);

export default HeaderNav;
