import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body {
    height: 100% !important;
    width: 100%;
    min-width: 1200px;
    margin: 0px;
  }

  body {
    font-family: 'Assistant', Helvetica, Arial, sans-serif;
    font-weight: 400;
  }

  body.fontLoaded {
    font-family: 'Assistant', Helvetica, Arial, sans-serif;
  }

  p, label {
    font-family: 'Assistant', Helvetica, Arial, sans-serif;
  }

  * {
    &:focus {
      outline: none;
    }
  }
`;
