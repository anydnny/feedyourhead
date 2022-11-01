import React from "react";
import styled from "styled-components";

import ArticleHeader from "../Components/Article/ArticleHeader/ArticleHeader";
import ArticleNumber from "../Components/Article/ArticleHeader/ArticleNumber";
import ArticleMainHeading from "../Components/Article/ArticleHeader/ArticleMainHeading";
import ArticleDesc from "../Components/Article/ArticleHeader/ArticleDesc";
import ArticleMain from "../Components/Article/ArticleMain/ArticleMain";
import SecondHeading from "../Components/Article/ArticleMain/SecondHeading";
import Paragraph from "../Components/Article/ArticleMain/Paragraph";
import ParagraphLink from "../Components/Article/ArticleMain/ParagraphLink";
import ArticleSection from "../Components/Article/ArticleMain/ArticleSection";
import Quote from "../Components/Article/ArticleMain/Quote";
import QuoteText from "../Components/Article/ArticleMain/QuoteText";
import Figure from "../Components/Article/ArticleMain/Figure";
import ArticleEnd from "../Components/Article/ArticleMain/ArticleEnd";
import test2 from "../img/FactoryImg/hehe-low.jpg";
import sx from "../img/FactoryImg/sx.jpeg";

const StyledFactoryRecords = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const FactoryRecords = () => {
  return (
    <StyledFactoryRecords>
      <ArticleHeader>
        <Figure low={test2} high={test2} />
        <ArticleNumber>FYH: 01</ArticleNumber>
        <ArticleMainHeading>Factory Records</ArticleMainHeading>
        <ArticleDesc>
          Factory Records - британская звукозаписывающая компания, которая
          внесла огромный вклад в развитие музыкальной сцены Великобритании,
          подсадила весь Манчестер на панк-рок, а затем и на электронную музыку,
          став символом независимой музыки.
        </ArticleDesc>
      </ArticleHeader>
      <ArticleMain>
        <ArticleSection>
          <SecondHeading>Манчестер</SecondHeading>
          <Figure low={test2} high={test2} />
          <Paragraph>
            В 19 веке Манчестер был городом с процветающей экономикой и считался
            мировым лидером текстильной промышленности. Здесь находились самые
            современные хлопчатобумажные фабрики, а манчестерский судоходный
            канал использовался для перевозки грузов по всей Великобритании.
          </Paragraph>
          <Paragraph>
            К середине века развитие промышленности пошло на убыль, фабрики
            стали закрываться и город начал приходить в упадок. Уже бывшие
            промышленные зоны стали пустовать, а атмосфера становилась более
            депрессивной. К тому же рост контейнеризации привёл к тому, что
            некогда крупный манчестерский канал оказался слишком узким и не
            подходил для современных судов.
          </Paragraph>
          <Quote>
            <QuoteText notQuote={true}>
              Всё это привело к безработице и оттоку людей из города.
            </QuoteText>
          </Quote>
          <Paragraph>
            Несмотря на общее уныние,{" "}
            <ParagraphLink href="https://google.com">Hello</ParagraphLink>в
            городе создаются условия, способные подтолкнуть людей к творчеству:
            освобождается много недвижимости, которую можно использовать для
            проведения концертов, а также есть жители города, которые не
            понимают чем себя занять.
          </Paragraph>
        </ArticleSection>
        <ArticleSection>
          <SecondHeading>Концерт Sex Pistols</SecondHeading>
          <Figure
            high={sx}
            width="100%"
            captionText="Sex Pistols"
            links={[
              {
                href: "https://music.yandex.ru/users/music-blog/playlists/1930",
                text: "Слушать на яндекс",
              },
              {
                href: "https://music.yandex.ru/users/music-blog/playlists/1930",
                text: "Слушать на яндекс музыке",
              },
              {
                href: "https://music.yandex.ru/users/music-blog/playlists/1930",
                text: "Слушать на яндекс музыке",
              },
            ]}
          />
          <Paragraph>
            Датой зарождения музыкальной культуры Манчестера можно считать 4
            июня 1976г. - день, когда в помещении "Зала свободной торговли"
            прошёл концерт андерграундной панк-рок группы Sex Pistols.
          </Paragraph>
        </ArticleSection>
        <ArticleEnd href="/a" author="any." />
      </ArticleMain>
    </StyledFactoryRecords>
  );
};
export { FactoryRecords };
