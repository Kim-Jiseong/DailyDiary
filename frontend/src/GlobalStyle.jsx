import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Background from "assets/png/desk.jpg";
const GlobalStyleWrapper = createGlobalStyle`
@font-face {
    font-family: 'Kimyooyee';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_07@1.0/Kimyooyee.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  * {
    box-sizing: border-box;
  }

  body, button, form, h1, h2, h3, h4, h5, h6, p, input, legend, li, ol, ul, select, table, td, textarea, th {
    margin:0;
    padding:0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  input{
    font-family: "Kimyooyee";
    font-weight: 700;
    font-style: normal;
  }
  button {
    background:none;
    border:0;
    cursor:pointer;

    &:disabled {
      cursor: default;
    }
  }

  *:focus {
    outline: none;
  }

  html {
    font-size: 62.5%;

    -webkit-tap-highlight-color: transparent;
  }
  body {
    background-color: #D6EAF1;
    /* background-image:url( ${Background});
    background-size: cover; */

  }

  @media screen and (max-width: 415px) {
    html {
      font-size: 9.375px;
    }
  }

  @media screen and (max-width: 413px) {
    html {
      font-size: 8.75px;
    }
  }

  @media screen and (max-width: 361px) {
    html {
      font-size: 8.125px;
    }
  }

  @media screen and (max-width: 321px) {
    html {
      font-size: 7.5px;
    }
  }
`;

const Container = styled.div`
  font-family: "Kimyooyee";
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media (min-width: 450px) {
    /* background-color: #f0f0f050; */
  }
`;

const Body = styled.div`
  max-width: 450px;
  margin: 0 auto;
  /* background-color: #fffbf2; */
  font-size: 1.6rem;
  @media (min-width: 450px) {
    min-height: 100vh;
  }
`;

const GlobalStyle = ({ children }) => {
  return (
    <>
      <GlobalStyleWrapper />
      <Container>
        <Body>{children}</Body>
      </Container>
    </>
  );
};

export default GlobalStyle;
