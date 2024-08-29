import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Georgia', sans-serif;
    letter-spacing: 2px;
    background-color: ${(props) => props.theme.primary};
    background-image: radial-gradient(circle, ${(props) =>
      props.theme.third} 1px, transparent 2px);
    background-size: 40px 40px;
    color: ${(props) => props.theme.secondary};
    transition: all 0.25s linear;
  }

`;
