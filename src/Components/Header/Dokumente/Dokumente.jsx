import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Figure from "../../Article/ArticleMain/Figure";
import first from "../../../img/FactoryImg/1.png";
import second from "../../../img/FactoryImg/2.png";

const StyledMain = styled.main`
position: relative;
  background-color: ${(props) => props.bg};
`;
const StyledLink = styled(Link)`
 width: 100%;
 height: 100%;
 display: absolute;
 color: black;
`;
const StyledSectionBox = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: ${(props) => props.bg};
  padding-top: 10rem; ;
`;
const StyledWrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 70%;

  @media (max-width: 375px) {
    width: 90%;
  }
  @media (min-width: 376px) and (max-width: 480px) {
    width: 80%;
  }
  
`;
const StyledArticleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${(props) => props.theme.font.fontFamily};
  h3 {
    display: inline-block;
    padding: 1rem 1.5rem;
    background-color: white;
    font-size: 4rem;
    margin-bottom: 8.8rem;
  }
  h1 {
    font-size: 14rem;
    font-weight: bolder;
    line-height: 90%;
    color: white;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 12rem;
  }
  p {
    font-size: 4rem;
    font-weight: 300;
    color: white;
    width: 70%;
    text-align: center;
    word-wrap: normal;
    margin-bottom: 12rem;
  }
  & ~ p {
    font-family: ${(props) => props.theme.font.fontFamily};
    font-size: 3rem;
    font-weight: 200;
    color: white;
    text-align: center;
    width: 80%;
    line-height: 140%;
    margin-top: 10rem;
    margin-bottom: 12rem;
    & span {
      color: black;
      background-color: #fff;
      padding: 0.2rem 1rem;
      white-space: nowrap;
    }
  }
  @media (max-width: 375px) {
    h3 {
      padding: 0.5rem 1rem;
      font-size: 3rem;
    }
    h1 {
      font-size: 5.5rem;
      line-height: 100%;
      margin-bottom: 20rem;
    }
    p {
      font-size: 2.4rem;
      width: 100%;
      margin-bottom: 8rem;
    }
    & ~ p {
      margin-top: 5rem;
      margin-bottom: 5rem;
      font-family: ${(props) => props.theme.font.fontFamily};
      font-size: 2rem;
      text-align: left;
      width: 100%;

      & span {
        color: black;
        background-color: #fff;
        padding: 0.2rem 1rem;
      }
    }
  }
  @media (min-width: 376px) and (max-width: 480px) {
    h3 {
      padding: 0.5rem 1rem;
      font-size: 3rem;
    }
    h1 {
      font-size: 6.5rem;
    }
    p {
      font-size: 3rem;
      width: 100%;
      margin-bottom: 8rem;
    }
    p {
      font-size: 2.4rem;
      width: 100%;
      margin-bottom: 8rem;
    }
    & ~ p {
      margin-top: 5rem;
      margin-bottom: 5rem;
      font-family: ${(props) => props.theme.font.fontFamily};
      font-size: 2rem;
      text-align: left;
      width: 100%;

      & span {
        color: black;
        background-color: #fff;
        padding: 0.2rem 1rem;
      }
    }
}
@media ${props => props.theme.media.tablet}{
    h1{
      font-size: 9rem;
    }
    p {
      font-size: 2.6rem;
      margin-bottom: 6rem;
    }
    & ~ p {
      margin-top: 5rem;
      font-size: 2.8rem;

      width: 100%;

      & span {
        color: black;
        background-color: #fff;
        padding: 0.2rem 1rem;
      }
    }
  }
`;

const Dokumente = () => {
  return (
    <>
    <StyledMain>
      <StyledLink to="/dokumente/fyh01">
      <StyledSectionBox bg="#1B1B1B">
        <StyledWrapperBox>
          <StyledArticleHeader>
            <h3>FYH 1</h3>
            <h1>
              Factory<br></br>recrods
            </h1>
            <p>Это Манчестер, здесь всё по-другому</p>
          </StyledArticleHeader>
          <Figure
            low={second}
            high={second}
            maxHeight="600px"
            height="600px"
            color="white"
            textTransform="lowercase"
            captionText="by KEVIN CUMMINS"
            textAlign="end"
          />
          <p>
            История трансформации Манчестера из пост-индустриального города в
            мировую столицу инди музыки, через безумную историю местного лейбла,
            на котором издавались <span>Joy Division</span>
          </p>
        </StyledWrapperBox>
      </StyledSectionBox>
      </StyledLink>
      
    </StyledMain>
    
    </>
  );
};
export { Dokumente };
