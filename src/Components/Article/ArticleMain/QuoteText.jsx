import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";

const StyledQuoteText = styled(Paragraph).attrs((props) => ({
  fontStyle: "italic",
  fontFamily: props.fontFamily || "Times New Roman, sans-serif",
  notQuote: props.notQuote || "true"
}))`margin-bottom: 0;`

const QuoteText = ({  notQuote, children }) => <StyledQuoteText notQuote={notQuote}>{!notQuote?"«":null}{children}{!notQuote?"»":null}</StyledQuoteText>; 

export default QuoteText;
