import React from "react";
import styled from "styled-components";
import HeaderNavLinks from "./HeaderNavLinks";
import HeaderNavItem from "./HeaderNavItem";
import HeaderNavLink from "./HeaderNavLink";

const StyledBurgerNavigation = styled.aside`
  width: 100vw;
  min-height: 100px;
  background: white;
  padding-left: 3rem;
  padding-bottom: 2rem;
`;

export default function HeaderBurgerNav({mobileLinkClick}) {
  return (
    <StyledBurgerNavigation>
      <HeaderNavLinks flexDirection="column">
        <HeaderNavItem mobileLinkClick={mobileLinkClick}>
          <HeaderNavLink to="/dokumente">DOKUMENTE</HeaderNavLink>
        </HeaderNavItem>
        <HeaderNavItem>
          <HeaderNavLink to="/information">INFORMATION</HeaderNavLink>
        </HeaderNavItem>
      </HeaderNavLinks>
    </StyledBurgerNavigation>
  );
}
