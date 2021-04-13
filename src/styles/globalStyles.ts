import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    
  }
  body {
    background-color: #F7F8F9;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
  }

  ul {
    list-style: none;
    margin: 0;
  }
  h4, p {
    margin: 0;
  }
  #root {
    position: relative;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #errorLabel {
    color: #DA1414;
    font-weight: 600;
    margin-top: 7px;
   span {
    margin-left: 7px;
   }
  }

  ::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background: #6B6C7E;
}
::-webkit-scrollbar-thumb:hover {
  width: 3px;
}

  --secondary: #6B6C7E;
  --primary: #0B5FFF;
  --dark: #272833;
  --warning: #B95000;
`;
