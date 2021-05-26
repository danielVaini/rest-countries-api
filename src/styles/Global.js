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
    height: auto;

    font-family: Nunito Sans;
    font-size: 16px;

    
  }



  :root {

    --menu-ligh: #FFFFFF;
    --bg-light: #FAFAFA;
    --card-bg-light: #FFFFFF;
    --input-light: #FFFFFF;


    --menu-dark: #2B3743;
    --bg-dark: #202D36;
    --card-dark: #2B3743;
    --input-dark: #293846;

    --text-dark: #FFFFFF;
    --text-light: #000000;

    --border-dark: #202D36;
    --border-light: #FEFEFE;

  }

  .light-mode {
    --menu-dark: var(--menu-ligh);
    --bg-dark: var(--bg-light);
    --card-dark: var(--card-bg-light);
    --input-dark: var(--input-light);
    --text-dark: var(--text-light);
    --border-dark: var(--border-light);
  }
`;