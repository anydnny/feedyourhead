import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";

const Global = createGlobalStyle`
*{ 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body, #root{
  height: 100%;
}
html {
  height: 100%;
  font-size: 62.5%;
}
a{
  text-decoration: none;
}
`;

const theme = {
    media: {
      phone: "(max-width: 480px)",
      tablet: "(min-width: 481px) and (max-width: 768px)",
      desktop: "(min-width: 769px)",
    },
    font: {
      fontFamily: '"Helvetica Neue", "Helvetica", sans-serif',
      color: "rgb(88, 88, 88)",
    },
    hover: {
      linkColor: "#004bbb",
    },
  };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);