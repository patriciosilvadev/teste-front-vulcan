import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;


    @media(max-width: 1080px) {
      font-size: 90%;
    }
  }

  body {
    background: #168B7D;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Lato', sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
