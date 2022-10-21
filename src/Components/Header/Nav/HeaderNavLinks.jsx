import React from "react";
import styled from "styled-components";

const StyledHeaderNavUl = styled.ul.attrs((props) => ({
  flexDirection: props.flexDirection || "row",
}))`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  width: 50%;
  max-width: 30rem;
  display: flex;
  justify-content: ${(props) =>
    props.flexDirection === "column" ? "flex-start" : "space-evenly"};
`;

const HeaderNavLinks = ({ flexDirection, children }) => (
  <StyledHeaderNavUl flexDirection={flexDirection}>
    {children}
  </StyledHeaderNavUl>
);

export default HeaderNavLinks;
