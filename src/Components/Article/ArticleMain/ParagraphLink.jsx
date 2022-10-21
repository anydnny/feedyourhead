import React from "react";
import styled from "styled-components"

const StyledParagraphLink = styled.a.attrs(props=>({target: props.target || "_blank"}))`
    font-size: 1em;
    text-decoration: none;
    color: ${(props) => props.color || props.theme.font.color};
    text-decoration: underline;
    font-style: italic;
    font-family: ${props => props.fontFamily || props.theme.font.fontFamily};

    &:hover{
        color: ${props => props.theme.hover.linkColor};
    }
`;
const ParagraphLink = ({href, fontFamily, color, children}) => <StyledParagraphLink color={color} fontFamily={fontFamily} href={href} alt={`more info about ${children}`}>{children}</StyledParagraphLink>;
export default ParagraphLink