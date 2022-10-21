import React from "react";
import styled from "styled-components";

const StyledMainHeading = styled.h1`
  font-size: 5rem;
  font-family: ${props => props.fontFamily || props.theme.font.fontFamily};
  margin-bottom: 1.2rem;
  line-height: 1;
  letter-spacing: -2px;
  color: ${(props) => props.color || props.theme.font.color};

  @media ${props => props.theme.media.phone}{
    font-size: 4rem;
    margin-bottom: 1rem;
  }
`;
const ArticleMainHeading = ({fontFamily, color, children }) => (
  <StyledMainHeading color={color} fontFamily={fontFamily}>{children}</StyledMainHeading>
);
export default ArticleMainHeading;
