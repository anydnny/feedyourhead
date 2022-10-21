import React from "react";
import styled from "styled-components";
const StyledArticleHeader = styled.header`
  margin-bottom: 5rem;
`;
const ArticleHeader = ({children}) => {
  return (
    <StyledArticleHeader>
      {children}
    </StyledArticleHeader>
  );
};
export default ArticleHeader;
