import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

    font-family: Nunito Sans;
    font-size: 16px;

    background-color: var(--very-dark-blue);
  }


  :root {

    // Dark mode
    --dark-blue: hsl(209, 23%, 22%);
    --very-dark-blue: hsl(207, 26%, 17%);

    // Light mode text
    --vr-dark-blue-LG: hsl(200, 15%, 8%);
    --dark-gray-LG: hsl(0, 0%, 52%);
    // Background lg
    --vr-lg-grayLG:  hsl(0, 0%, 98%);

    --white: hsl(0, 0%, 100%);
  }

  .light-mode {
    --dark-blue: var(--dark-gray-LG);
    --very-dark-blue: var(----vr-lg-grayLG);
    
  }
`;