import React from "react";
import styled from "styled-components";

const StyledPageWrap = styled.div`
    width: 50%;
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    height: 5500px;
    margin: auto;
`
const PageWrap = ({children}) => <StyledPageWrap>{children}</StyledPageWrap>

export  {PageWrap}