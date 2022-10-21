import React from "react";
import styled from "styled-components";
const StyledSecondHeading = styled.h2`
    font-size: 2.5rem;
    font-family: ${props => props.fontFamily || props.theme.font.fontFamily};
    color: ${(props) => props.color || props.theme.font.color};
    margin-bottom: 2.5rem;
`
const SecondHeading = ({fontFamily, color, children}) => <StyledSecondHeading fontFamily={fontFamily} color={color}>{children}</StyledSecondHeading>
export default SecondHeading