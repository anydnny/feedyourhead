import React from "react";
import styled from "styled-components";

const StyledArticleFooter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.4rem;
  font-family: ${(props) => props.theme.font.fontFamily};
  color: ${(props) => props.theme.font.color};
`;

const StyledAuthorLink = styled.a`
  text-decoration: underline;
  color: ${(props) => props.theme.font.color};
  &:hover{
    color: ${props => props.theme.hover.linkColor}
  }
`;
const StyledArticleAuthor = styled.span`
`;

const ArticleEnd = ({href, author}) => {
  return (
    <StyledArticleFooter >
      <StyledArticleAuthor>
        by <StyledAuthorLink href={href}>{author}</StyledAuthorLink>
      </StyledArticleAuthor>
      <StyledArticleAuthor>thank's bye</StyledArticleAuthor>
    </StyledArticleFooter>
  );
};
export default ArticleEnd;
