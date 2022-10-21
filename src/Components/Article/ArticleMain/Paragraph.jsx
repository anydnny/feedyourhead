import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-family: ${props => props.fontFamily || props.theme.font.fontFamily};
  font-size: 1.6rem;
  color: ${(props) => props.color || props.theme.font.color};
  text-indent: ${props => props.indent || "0"};
  text-align: ${({textAlign}) => textAlign || "justify"};
  line-height: 22px;
  margin: ${({margin}) => margin || "0 0 1.5rem 0"};
  font-style: ${({fontStyle}) => fontStyle || "normal"};

  @media ${props => props.theme.media.phone}{
    font-size: 1.4rem;
  }
`;
const Paragraph = ({fontFamily, textAlign, fontStyle, margin, color, children }) => (
  <StyledParagraph fontFamily={fontFamily} textAlign={textAlign} fontStyle={fontStyle} margin={margin} color={color}>{children}</StyledParagraph>
);
export default Paragraph;
