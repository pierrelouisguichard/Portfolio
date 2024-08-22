import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
    transition: all 0.25s linear;
  }

`;
