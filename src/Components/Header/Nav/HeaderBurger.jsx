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
          <path d="M1 1L9 6.19157" stroke="black" />
          <path d="M9 1L0.999996 6.19157" stroke="black" />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H8" stroke="black" />
          <path d="M0 4H8" stroke="black" />
          <path d="M0 7H8" stroke="black" />
        </svg>
      )}
    </StyledHeaderBurger>
  );
}
