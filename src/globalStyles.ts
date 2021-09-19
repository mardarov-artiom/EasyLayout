import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
}

* {
  box-sizing: border-box;
  outline: none !important;
}

input:-internal-autofill-selected {
  background-color: #fff !important;
}

input {
  border: none;
  background: none;
  color: #fff;
}
`;

export default GlobalStyle;
