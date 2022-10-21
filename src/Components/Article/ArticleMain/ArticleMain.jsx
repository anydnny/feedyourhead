import React from "react";
import styled from "styled-components";

const StyledArticleMain = styled.main`
  margin-bottom: 4rem;
`;
const ArticleMain = ({ children }) => (
  <StyledArticleMain>{children}</StyledArticleMain>
);

export default ArticleMain;
