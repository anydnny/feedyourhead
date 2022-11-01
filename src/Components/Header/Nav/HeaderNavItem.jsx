import React from "react";
import styled from "styled-components";

const StyledHeaderNavLi = styled.li`
  list-style-type: none;

  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
  }
`;

const HeaderNavItem = ({ mobileLinkClick, children }) => (
  <StyledHeaderNavLi onClick={mobileLinkClick}>{children}</StyledHeaderNavLi>
);
export default HeaderNavItem;
