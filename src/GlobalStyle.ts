import { createGlobalStyle, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  fontColor: "#252525",
  secondFontColor: "#7D7D7D",
  mainColor: "#029CF5",
  secondColor: "#15EDED",
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: ${theme.fontColor};
  }
`;