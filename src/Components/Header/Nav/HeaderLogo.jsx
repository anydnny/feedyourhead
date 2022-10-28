import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
const StyledHeaderLogoWrapper = styled.div`
  min-width: 9%;
  mix-blend-mode: difference;
  ;
`;
const StyledHeaderLogoText = styled(Link)`
  font-size: 1.4rem;
  color: white;
  font-family: ${props => props.fontFamily || props.theme.font.fontFamily};
  z-index: 100;
`;

export default function HeaderLogo({mobileLinkClick, fontFamily, color }) {
  return (
    <StyledHeaderLogoWrapper>
      <StyledHeaderLogoText to="/" onClick={()=>mobileLinkClick()} color={color} fontFamily={fontFamily}>
        FYH
      </StyledHeaderLogoText>
    </StyledHeaderLogoWrapper>
  );
}
