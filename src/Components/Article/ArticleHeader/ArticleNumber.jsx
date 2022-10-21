import React from "react";
import styled from "styled-components";

const StyledArticleNumber = styled.h4`
  font-size: 1.4rem;
  font-family: ${props => props.fontFamily || props.theme.font.fontFamily};
  font-weight: bold;
  margin-left: 0.25rem;
  color: ${(props) => props.color || props.theme.font.color};
`;

const ArticleNumber = ({ color, fontFamily, children }) => (
  <StyledArticleNumber color={color} fontFamily={fontFamily}>{children}</StyledArticleNumber>
);

export default ArticleNumber;
