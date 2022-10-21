import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import {Link} from "react-router-dom";

const StyledMainPage = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.font.fontFamily};
  font-size: 9rem;
  padding-bottom: 3rem;
  @media ${props => props.theme.media.phone}{
    font-size: 5rem;
  }
`;
const StyledMainText = styled.h1`
  font-size: 1em;
  line-height: 8.5rem;
  @media ${props => props.theme.media.phone}{
    line-height: 4.5rem;
  }
  
 
`;
const StyledMainTextBox = styled.div` margin-top: auto;
`;
const StyledSecondText = styled.p`
  font-size: 0.2em;
  text-align: right;
  @media ${props => props.theme.media.phone}{
    font-size: 0.45em;
  }
`;
const StyledLastPost = styled(Link)`
display: inline-block;
  font-size: 0.2em;
  margin-top: auto;
  text-decoration: underline;
    color: ${props => props.theme.font.color};
  &:hover{
    color: ${props => props.theme.hover.linkColor};
  }
  &::after{
    content: "↗";
    font-size: .8em;
    display: inline-block;
    margin-left: .5rem;
  }
  @media ${props => props.theme.media.phone}{
    font-size: 0.4em;
  }
`;
const MainPage = () => {
  useEffect(()=>{
    document.title = `FYH`
  },[]);

  return (
  <StyledMainPage>
    <StyledMainTextBox>
      <StyledMainText>
        FEED
        <br />
        YOUR HEAD
      </StyledMainText>
      <StyledSecondText>web-magazine</StyledSecondText>
    </StyledMainTextBox>
    <StyledLastPost to="/dokumente/fyh01">FYH:01 — Factory Records</StyledLastPost>
  </StyledMainPage>
  )
}
export { MainPage };
