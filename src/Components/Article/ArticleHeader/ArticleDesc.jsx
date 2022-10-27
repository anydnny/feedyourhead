import React from "react";
import styled from "styled-components";
const StyledArticleDesc = styled.p`
  font-size: 1.4rem;
  font-family: ${props => props.fontFamily || props.theme.font.fontFamily};
  margin-left: 0.25rem;
  max-width: 600px;
  text-align: justify;
  line-height: 2rem;
  color: ${(props) => props.color || props.theme.font.color};
`;
const ArticleDesc = ({color, fontFamily, children}) => <StyledArticleDesc color={color} fontFamily={fontFamily}>{children}</StyledArticleDesc>
export default ArticleDesc;