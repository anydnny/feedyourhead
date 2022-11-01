import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Figure from "../../Article/ArticleMain/Figure";
import first from "../../../img/FactoryImg/1.png";
import second from "../../../img/FactoryImg/2.png";
import covers from "../../../img/FactoryImg/covers.jpg";

const StyledWrap = styled.div`
  position: relative;
  background-color: ${(props) => props.bg};
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const StyledMain = styled.main`
  flex: 1 0 auto;
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
  &:first-child {
    padding-top: 10rem;
  }
`;
const StyledWrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: ${(props) => props.blockWidth || "70%"};

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
  @media ${(props) => props.theme.media.tablet} {
    h1 {
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

const StyledBackNumber = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 40rem;
  font-weight: bolder;
  color: rgba(166, 166, 166, 0.39);
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @media ${(props) => props.theme.media.phone} {
    font-size: 20rem;
    color: rgba(166, 166, 166, 0.21);
  }
  @media ${(props) => props.theme.media.tablet} {
    font-size: 30rem;
    color: rgba(166, 166, 166, 0.21);
  }
`;
const StyledArticleHeading1 = styled.h2`
  align-self: ${(props) => props.alignSelf};
  font-size: 5rem;
  background-color: #1b1b1b;
  color: white;
  padding: 0.5rem 2rem;
  line-height: 93%;
  margin-bottom: 5.5rem;
  z-index: 2;

  @media ${(props) => props.theme.media.phone} {
    font-size: 3rem;
    align-self: center;
  }
  @media ${(props) => props.theme.media.tablet} {
    font-size: 3rem;
    align-self: flex-end;
  }
`;
const StyledFYH11Wrap = styled(StyledWrapperBox)`
  font-family: ${(props) => props.theme.font.fontFamily};
  padding: 2.5rem 0;
  z-index: 0;
  @media ${(props) => props.theme.media.phone} {
    padding: 2.5rem 0;
  }
  div {
    align-self: flex-start;
    border-left: 0.2rem solid black;
    padding: 2rem;
    width: 60%;
    margin-bottom: 6rem;
    z-index: 2;
    @media ${(props) => props.theme.media.phone} {
      width: 90%;
      padding-right: 0;
    }
    @media ${(props) => props.theme.media.tablet} {
      width: 100%;
    }
    @media (min-width: 771px) and (max-width: 1024px) {
      width: 100%;
    }

    p {
      font-size: 3rem;
      line-height: 135%;

      @media ${(props) => props.theme.media.phone} {
        font-size: 2rem;
        font-weight: 200;
        text-align: start;
      }
      @media ${(props) => props.theme.media.tablet} {
        font-size: 2rem;
      }
    }
  }

  p {
    font-size: 2rem;
    align-self: flex-end;
    z-index: 2;
    @media ${(props) => props.theme.media.phone} {
      font-size: 1.8rem;
      font-weight: 200;
      text-align: end;
    }
  }
`;
const StyledArticleHeading2 = styled(StyledArticleHeading1)`
  @media ${(props) => props.theme.media.tablet} {
    align-self: flex-start;
  }
`;
const StyledFYH12Wrap = styled(StyledFYH11Wrap)`
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    margin-top: 4rem;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-start;
      border: none;
    }
    p {
      margin-left: 2rem;
      align-self: center;
      max-width: 50%;

      @media ${(props) => props.theme.media.phone} {
        align-self: flex-start;
        margin-bottom: 5rem;
        border-left: 2px solid black;
        margin-left: 0;
        padding-left: 2rem;
        max-width: 90%;
      }
      @media (min-width: 481px) and (max-width: 768px) {
        align-self: flex-start;
        margin-bottom: 5rem;
        border-left: 2px solid black;
        margin-left: 0;
        padding-left: 2rem;
        max-width: 60%;
      }
    }
    img {
      width: 45%;
      object-fit: contain;
      @media ${(props) => props.theme.media.phone} {
        width: 100%;
      }
      @media (min-width: 481px) and (max-width: 768px) {
        width: 80%;
        align-self: flex-start;
      }
    }
  }
`;
const StyledTeaserFooter = styled.footer`
  background-color: #1b1b1b;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  p {
    font-family: ${(props) => props.theme.font.fontFamily};
    text-align: center;
    font-size: 4rem;
    font-weight: 100;
    color: white;
    line-height: 130%;
  }
`;
const FYH11 = () => {
  return (
    <StyledSectionBox bg="#F15A26">
      <StyledFYH11Wrap blockWidth="80%">
        <StyledBackNumber>1.1</StyledBackNumber>
        <StyledArticleHeading1 alignSelf="flex-end">
          factory records<br></br>artefacts
        </StyledArticleHeading1>
        <div>
          <p>
            Копаемся в странном* каталоге лейбла, где можно найти всё: начиная
            от музыкальных релизов и клипов, заканчивая различной атрибутикой,
            зданиями и берушами.
          </p>
        </div>
        <p>*даже нашлось место для кота (O_O;)</p>
      </StyledFYH11Wrap>
    </StyledSectionBox>
  );
};
const FYH12 = () => {
  return (
    <StyledSectionBox bg="#588145">
      <StyledFYH12Wrap blockWidth="80%">
        <StyledBackNumber>1.2</StyledBackNumber>
        <StyledArticleHeading2 alignSelf="flex-start">
          factory records<br></br>releases
        </StyledArticleHeading2>
        <div>
          <p>
            Рассказываем о 10 знаковых релизах выходивших на Factory Records.
          </p>
          <img src={covers} />
        </div>
      </StyledFYH12Wrap>
    </StyledSectionBox>
  );
};

const Dokumente = () => {
  return (
    <StyledWrap>
      <StyledMain>
        <StyledLink to="/dokumente/fyh01">
          <StyledSectionBox bg="#1B1B1B">
            <StyledWrapperBox>
              <StyledArticleHeader>
                <h3>FYH 1</h3>
                <h1>
                  Factory<br></br>records
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
                История трансформации Манчестера из пост-индустриального города
                в мировую столицу инди музыки, через безумную историю местного
                лейбла, на котором издавались <span>Joy Division</span>
              </p>
            </StyledWrapperBox>
          </StyledSectionBox>
        </StyledLink>
        <FYH11 />
        <FYH12 />
      </StyledMain>
      <StyledTeaserFooter>
        <p>FYH: 02</p>
        <p>sooooooon</p>
      </StyledTeaserFooter>
    </StyledWrap>
  );
};
export { Dokumente };
