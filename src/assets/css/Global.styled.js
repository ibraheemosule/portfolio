import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
}
body {
    width: 100vw;
    max-width: 1500px;
    margin: auto;
    overflow-x: hidden;
}
`;

export default GlobalStyle;
