import React from "react";
import styled from "styled-components";

import first from "../../../img/FactoryImg/1.png";
import second from "../../../img/FactoryImg/2.png";
const StyledMain = styled.main`
  background-color: blue;
  padding-top: 10rem;
  height: 200vh;
`;
const StyledSectionBox = styled.section.attrs((props) => ({ bg: props.bg }))`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  background-color: ${(props) => props.bg};
`;
const StyledContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  
  position: ${props => props.position || "static"} ;
  top: ${props => props.top || "0"} ;
`;

const StyledImgContainer = styled.figure`
  max-width: 37.5%;
`;

const StyledDiv = styled.div`
  width: ${props => props.width || "60%"};
  height: 500px;
  
  display: ${props => props.flex || "block"};
  align-items: ${props => props.align};
`;

const StyledH1 = styled.h1`
  font-size: 9.6rem;
  line-height: 9.024rem;
  font-family: Arial, Helvetica, sans-serif, sans-serif;
  color: white;
  width: 70%;
  position: sticky;
  top: 100px;
`;
const StyledPar = styled.p`font-size: 2.3rem; color: white; text-align: right`
const StyledImg = styled.img.attrs((props) => ({
  width: props.width,
}))`
  height: auto;
  width: ${(props) => props.width};
`;
const StyledImgCaption = styled.figcaption``;
const Dokumente = () => {
  return (
    <StyledMain>
      <StyledSectionBox bg="#1B1B1B">
        <StyledContentRow>
          <StyledImgContainer>
            <StyledImg src={second} width="100%" />
            <StyledImgCaption>by KEVIN CUMMINS</StyledImgCaption>
          </StyledImgContainer>
          <StyledDiv>
            <StyledH1>Это Манчестер, здесь всё по-другому</StyledH1>
          </StyledDiv>
        </StyledContentRow>
        <StyledContentRow position="relative" top="-100px">
          <StyledDiv display="flex" align="flex-end">
            <StyledPar>История трансформации Манчестера из пост-индустриального города в мировую столицу инди музыки, через безумную историю местного лейбла, на котором издавались Joy Division.</StyledPar>
          </StyledDiv>
          <StyledImgContainer>
            <StyledImg src={first} width="100%" />
            <StyledImgCaption>by KEVIN CUMMINS</StyledImgCaption>
          </StyledImgContainer>
        </StyledContentRow>
      </StyledSectionBox>
    </StyledMain>
  );
};
export { Dokumente };
