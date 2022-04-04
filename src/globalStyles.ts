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

  .main-class-list {
    margin-left: 15px;
    padding-left: 15px;
    border-left: 1px solid #fff;
    display: flex;
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
`;

export default GlobalStyle;
