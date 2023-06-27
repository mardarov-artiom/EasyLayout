import { createGlobalStyle } from 'styled-components';
import { globalStylesInterface } from 'interfaces/default';

const GlobalStyle = createGlobalStyle<globalStylesInterface>`
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

  *:not(input) {
    caret-color: transparent;
  }

  input:-internal-autofill-selected {
    background-color: #fff !important;
  }

  input {
    border: none;
    background: none;
    color: #fff;

    &[type="text"] {
      caret-color: auto;
    }
  }

  .flex-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .hidden {
    overflow: hidden;
  }

  .main-class-list {
    padding-left: 15px;
    display: flex;
    align-items: center;
  }

  .button {
    background-color: #304ffe;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 5px 8px;
    margin-left: 15px;
    cursor: pointer;
    transition: background-color 0.2s linear;

    &.no-offset {
      margin-left: 0;
    }

    &.double-padding {
      padding: 10px 16px;
    }

    &.success {
      background-color: #28a745;
    }

    &.cancel {
      background-color: #304ffe;
    }

    &.danger {
      background-color: #dc3545;
    }

    &.disabled {
      background-color: #f8f9fa;
      cursor: not-allowed;
      color: #d3d3d3;
    }
  }

  .relative {
    position: relative;
  }

  .hide-button {
    position: absolute;
    top: 5px;
    left: 15px;
    padding: 3px 5px;
    color: #000;
    background-color: #fff;
    border-radius: 3px;
    font-size: 12px;
    cursor: pointer;

    &.right {
      left: unset;
      right: 5px;
    }
  }

  .page-output-wrapper > div:last-child {
    margin-bottom: 0;
  }

  ${props => props.classesToAdd}
`;

export default GlobalStyle;
