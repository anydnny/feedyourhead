import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
const StyledHeaderNavigationLink = styled(Link)`
  transition: 0.2s ease;
  color: ${(props) => props.color || props.theme.font.color};
  font-size: ${(props) => props.size || "1.4rem"};
  font-family: ${props => props.fontFamily || props.theme.font.fontFamily};

  &:hover {
    color: ${props => props.hovercolor || props.theme.hover.linkColor};
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
  @media ${props => props.theme.media.phone}{
    font-size: 4rem;
  }
`;

const HeaderNavLink = ({to, color, hovercolor, size, children }) => (
  <StyledHeaderNavigationLink to={to} color={color} hovercolor={hovercolor} size={size}>
    {children}
  </StyledHeaderNavigationLink>
);

export default HeaderNavLink;
