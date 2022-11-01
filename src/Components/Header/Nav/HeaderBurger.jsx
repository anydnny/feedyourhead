import React from "react";
import styled from "styled-components";

const StyledHeaderBurger = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
 
`;

export default function HeaderBurger({ openBurger, ...rest }) {
  return (
    <StyledHeaderBurger openBurger={openBurger} {...rest}>
      {openBurger ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L9 6.19157" stroke="white" />
          <path d="M9 1L0.999996 6.19157" stroke="white" />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3H8" stroke="white" />
          <path d="M0 6H8" stroke="white" />
        </svg>
      )}
    </StyledHeaderBurger>
  );
}
