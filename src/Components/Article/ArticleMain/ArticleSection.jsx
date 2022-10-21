import React from "react";
import styled from "styled-components";
const StyledArticleSection = styled.section`
    margin-bottom: 3.5rem;
`
const ArticleSection = ({children}) => <StyledArticleSection>{children}</StyledArticleSection>;
export default ArticleSection