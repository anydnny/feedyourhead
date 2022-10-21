import React from "react";
import styled from "styled-components";
const StyledArticleFooter = styled.footer`
flex-shrink: 0;
  padding: 3rem 3rem;
  background-color: #004bbb;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2.5rem;
  }

`;
const StyledFooterLogo = styled.h2`
  font-size: 5rem;
  color: white;
  font-family: ${(props) => props.theme.font.fontFamily};
  line-height: 5rem;
  white-space: nowrap;
  order: 0;
  

  @media (min-width: 1025px) {
    font-size: 7rem;
    line-height: 7rem;
  }
  @media (max-width: 375px) {
    font-size: 4rem;
    line-height: 4rem;
  }
  
  @media (max-width: 768px) {
    order: 1;
    align-self: flex-start;
  }
`;
const StyledFooterRight = styled.div`
order: 1;
  font-family: ${(props) => props.theme.font.fontFamily};
  font-size: 2rem;
  color: white;
  text-align: right;
  @media (max-width: 768px) {
    order: 0;
    align-self: flex-end;
  }
`;
const StyledFooterNav = styled.nav`
  margin-bottom: 3rem;
`;
const StyledFooterLinks = styled.ul`
  margin-top: 1rem;
`;
const StyledFooterItem = styled.li`
  list-style-type: none;
  text-transform: lowercase;
  text-align: right;
`;
const StyledFooterLink = styled.a`
  color: white;
  font-size: 1.8rem;
  &:hover {
    text-decoration: underline;
  }
  &:hover::before {
    content: "↖";
    margin-right: 0.5rem;
    font-size: 1.2rem;
    display: inline-block;
  }
`;

const ArticleFooter = ({ links }) => {
  return (
    <StyledArticleFooter>
      <StyledFooterLogo>
        FEED
        <br />
        YOUR HEAD
      </StyledFooterLogo>
      <StyledFooterRight>
        <StyledFooterNav>
          <span>Subscribe:</span>
          <StyledFooterLinks>
            {links
              ? links.map((link, index) => {
                  return (
                    <StyledFooterItem key={index}>
                      <StyledFooterLink href={link.href}>
                        {link.text}
                      </StyledFooterLink>
                    </StyledFooterItem>
                  );
                })
              : null}
          </StyledFooterLinks>
        </StyledFooterNav>
      </StyledFooterRight>
    </StyledArticleFooter>
  );
};
export default ArticleFooter;
