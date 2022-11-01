import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const StyledFigure = styled.figure`
  margin: 3rem 0;
`;

const StyledImg = styled.img.attrs((props) => ({
  loading: props.loading || "lazy",
  alt:
    props.alt ||
    "i'm so sorry, but i forgot to add a description of the picture",
}))`
  max-width: 100%;
  width: ${(props) => props.width};
  display: block;
  height: auto;
  max-height: ${props => props.maxHeight || "50rem"};
  object-fit: contain;
  margin: 0 auto;
`;
const StyledFigCaption = styled.figcaption`
  color: ${(props) => props.color || props.theme.font.color};
  margin-top: 1.5rem;
  font-size: 1.2rem;
  text-transform: ${props => props.textTransform || "none"};
  font-family: ${(props) => props.fontFamily || props.theme.font.fontFamily};
  text-align: ${props => props.textAlign || "start"};
`;
const StyledFigureLinkSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;
const StyledFigureLink = styled.a.attrs({target: "_blank"})`
  text-decoration: underline;
  text-transform: lowercase;
  color: ${(props) => props.color || props.theme.hover.linkColor};
  font-family: ${(props) => props.fontFamily || props.theme.font.fontFamily};
  font-size: 1.2rem;
  &:not(:last-child)::after{
    content: "/";
    width: 1rem;
    text-align: center;
    display:inline-block;
    margin: 0 .5rem;
    line-height: 1.2rem;
  }
  &:hover{
    &::after{
      content: "↗";
      display: inline-block;
      font-size: 1rem;
      margin-left: .5rem;
    }
  }
`;

const Figure = ({
  src,
  high,
  low,
  alt,
  width,
  height,
  maxHeight,
  captionText,
  textTransform,
  textAlign,
  color,
  fontFamily,
  fontSize,
  links,
}) => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const callbackFunc = (entries) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    let observerRefValue = null;

    const observer = new IntersectionObserver(callbackFunc, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current;
    }
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [containerRef]);
  return (
    <StyledFigure>
      <StyledImg
        ref={containerRef}
        src={visible ? src || high : src || low}
        high={high}
        low={low}
        alt={alt}
        width={width}
        height={height || "500"} 
        maxHeight={maxHeight}
      />
      {captionText ? (
        <StyledFigCaption
          color={color}
          fontFamily={fontFamily}
          fontSize={fontSize}
          textTransform={textTransform}
          textAlign={textAlign}
          
        >
          {captionText}
        </StyledFigCaption>
      ) : null}
      {links ? (
        <StyledFigureLinkSection>
          {links.map((link, index) => (
            <StyledFigureLink key={index} href={link.href}>{link.text}</StyledFigureLink>
          ))}
        </StyledFigureLinkSection>
      ) : null}
    </StyledFigure>
  );
};
export default Figure;
