import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";

const StyledQuoteBox = styled.article`
  width: 90%;
  border-left: 1.5px solid rgba(88, 88, 88, 0.56);
  padding: 0.5rem 0 0.5rem 2rem;
  min-height: 4rem;
  margin: 3rem auto;

  @media ${props => props.theme.media.phone}{
    width: 100%;
  }
  @media ${props => props.theme.media.tablet}{
    width: 100%;
  }
  p{margin:0;}
  & p:not(:first-child){
   margin-top: 1.5rem;
  }
`;

const StyledQuoteAuthor = styled(Paragraph).attrs(({fontFamily})=>({ margin: "0",  fontStyle: "italic",
fontFamily: fontFamily || "Times New Roman, sans-serif",}))`
`;
const Quote = ({ author, children }) => {
  return (
    <StyledQuoteBox>
      {children}
      {author ? <StyledQuoteAuthor textAlign="right">— {author}</StyledQuoteAuthor> : null}
    </StyledQuoteBox>
  );
};
export default Quote;
