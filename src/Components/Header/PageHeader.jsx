import React from "react";
import styled from "styled-components";
import { useState,useEffect } from "react";

import HeaderLogo from "./Nav/HeaderLogo";
import HeaderNav from "./Nav/HeaderNav";

import HeaderNavLink from "./Nav/HeaderNavLink";
import HeaderNavLinks from "./Nav/HeaderNavLinks";
import HeaderNavItem from "./Nav/HeaderNavItem";
import HeaderBurger from "./Nav/HeaderBurger";
import HeaderBurgerNav from "./Nav/HeaderBurgerNav";

const StyledPageHeader = styled.header.attrs((props) => ({
  bg: props.bg ? props.bg : "white",
}))`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.bg};;
`;

export default function PageHeader({ isMobile, bg }) {
  const [openBurger, setOpenBurger] = useState(false);

  useEffect(() => {
    window.addEventListener("orientationchange", function () {
      setOpenBurger(false);
    });
  }, [isMobile]);
const mobileLinkClick = () => {
  if(!isMobile) return null
  setOpenBurger(false)
}
  return (
    <StyledPageHeader bg={bg}>
      <HeaderNav>
        <HeaderLogo mobileLinkClick={mobileLinkClick}/>
        {!isMobile ? <HeaderNavLinks>
          <HeaderNavItem>
            <HeaderNavLink to="/dokumente" hovercolor="black">Dokumente</HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink to="/information" hovercolor="black">Information</HeaderNavLink>
          </HeaderNavItem>
        </HeaderNavLinks> : null}
        {isMobile ? <HeaderBurger onClick={()=>setOpenBurger(!openBurger)} openBurger={openBurger}/>: null}
      </HeaderNav>
      {openBurger && isMobile ? <HeaderBurgerNav openBurger={openBurger} mobileLinkClick={mobileLinkClick}/>:null}
    </StyledPageHeader>
  );
}
