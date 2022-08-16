import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  #root{
    background-color: #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;