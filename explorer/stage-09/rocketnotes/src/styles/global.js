import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  :root {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  a {
    text-decoration: none;
  }

  buttons, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover a:hover {
    filter: brightness(0.9);
  }
`;