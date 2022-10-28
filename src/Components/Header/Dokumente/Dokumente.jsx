import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import first from "../../../img/FactoryImg/1.png";
import second from "../../../img/FactoryImg/2.png";
const StyledMain = styled.main`
  background-color: #1b1b1b;
`;
const StyledSectionBox = styled.section.attrs((props) => ({ bg: props.bg }))`
  display: flex;
  position: relative;
  flex-direction: column;

  padding-top: 10rem;
  margin: 0 5rem;
  background-color: ${(props) => props.bg};
  @media (min-width: 1441px) {
    margin: 0 auto;
    max-width: 1300px;
  }
  @media (min-width: 426px) and (max-width: 768px){
    margin: 0 2.5rem;
  }
`;
const StyledContentRow = styled.div`
  display: flex;
  justify-content: space-between;

  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "0"};
`;

const StyledImgContainer = styled.figure`
  max-width: 37.5%;
  @media (max-width: 1024px) {
    max-width: 45%;
  }
`;

const StyledDiv = styled.div`
  width: ${(props) => props.width || "60%"};
  height: 500px;

  display: ${(props) => props.display || "block"};
  align-items: ${(props) => props.align};
  padding: ${(props) => props.padding};

  @media (max-width: 1024px) {
    width: 53%;
  }
  
`;

const StyledH1 = styled.h1`
  font-size: 9.6rem;
  line-height: 9.024rem;
  font-family: ${(props) => props.theme.font.fontFamily};
  color: white;
  width: 70%;
  position: sticky;
  top: 100px;

  @media (max-width: 1024px) {
    font-size: 6rem;
    line-height: 5.5rem;
  }
  @media (max-width: 660px) {
    font-size: 4rem;
    line-height: 3.5rem;
  }
`;
const StyledPar = styled.p`
  font-size: 3rem;
  color: white;
  text-align: right;
  font-family: ${(props) => props.theme.font.fontFamily};
  font-weight: lighter;
  word-wrap: nowrap;
  width: 84%;
  margin-left: auto;
  line-height: 135%;
`;
// Закончил на адаптации первого изображения

const StyledImg = styled.img.attrs((props) => ({
  width: props.width,
}))`
  height: auto;
  width: ${(props) => props.width};
  @media (max-width: 660px) {
    width: 20rem;
    object-fit: cover
  }
`;
const StyledImgCaption = styled.figcaption`
  margin-top: 1rem;
  font-family: ${(props) => props.theme.font.fontFamily};
  text-transform: lowercase;
  color: white;
  font-size: 1.2rem;
  text-align: ${(props) => props.textAlign || "left"};
`;

const StyledBtn = styled.button`
  position: absolute;
  padding: 1.2rem 0.8rem;
  min-width: 50rem;
  background-color: #fadb37;
  mix-blend-mode: lighten;

  text-transform: lowercase;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  border: none;
  cursor: pointer;
  animation-name: blind;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes blind {
    from {
      background-color: #fadb37;
    }
    50% {
      background-color: #fad937a5;
    }
    to {
      background-color: #fadb37;
    }
  }
`;
const StyledBtnLink = styled(Link)`
  color: #1b1b1b;
  font-family: ${(props) => props.theme.font.fontFamily};
  font-size: 6.4rem;
`;
const StyledSpan = styled.span`
  background-color: ${(props) => props.bg};
  padding: 5px;
`;
const Dokumente = () => {
  return (
    <StyledMain>
      <StyledSectionBox bg="#1B1B1B">
        <StyledBtn>
          <StyledBtnLink to="/dokumente/fyh01">factory records</StyledBtnLink>
        </StyledBtn>
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
          <StyledDiv display="flex" align="flex-end" padding="0 0 9rem 0">
            <StyledPar>
              История трансформации Манчестера из пост-индустриального города в
              мировую столицу инди музыки, через безумную историю местного
              лейбла, на котором издавались
              <StyledSpan bg="#588145">Joy&nbsp;Division.</StyledSpan>
            </StyledPar>
          </StyledDiv>
          <StyledImgContainer>
            <StyledImg src={first} width="100%" />
            <StyledImgCaption textAlign="right">
              by KEVIN CUMMINS
            </StyledImgCaption>
          </StyledImgContainer>
        </StyledContentRow>
      </StyledSectionBox>
    </StyledMain>
  );
};
export { Dokumente };
