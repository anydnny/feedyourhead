import React from "react";
import styled from "styled-components";
import ArticleFooter from "../Article/ArticleFooter/ArticleFooter";
import { FactoryRecords } from "../../Pages/FactoryRecords";
import {useParams} from "react-router-dom";
import { useEffect } from "react";


const StyledPageWrapper = styled.div`
  padding-top: 10rem;
  width: 50%;
  padding-top: 15rem;
  margin: auto;
  background: ${(props) => props.color};
  flex: 1 0 auto;

  @media ${(props) => props.theme.media.phone} {
    width: 100%;
    padding: 10rem 2rem 0 2rem;
  }
  @media (min-width: 481px) and (max-width: 1024px) {
    width: 80%;
    padding: 10rem 0 0 0;
  }
`;
function PageWrapper() {
  const {id} = useParams();
  const articles = {fyh01: <FactoryRecords />}

  useEffect(()=>{
    document.title = `FYH ${id.slice(id.length - 2)}`
  }, [id])
  
  
  return (
    <>
      <StyledPageWrapper color="white">{articles[id]}</StyledPageWrapper>
      <ArticleFooter
        links={[
          { href: "/1", text: "Instagram" },
          { href: "/2", text: "Telegram" },
        ]}
      />
    </>
  );
}
export {PageWrapper}