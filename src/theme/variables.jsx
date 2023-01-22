import { css, Global } from '@emotion/react';

export default function Variables() {
  return (
    <Global styles={css`
      :root {
        
      //  Fonts
        --font-inter: 500 16px 'Inter', sans-serif;

        --font-roboto: 400 15px 'Roboto', sans-serif;
        --font-robot-heading: 400 28px 'Roboto', sans-serif;
      //  Fonts
      
      
      // Colors
      --gray-lighter: #ddd;
      --gray-light: #c6c6c6;
      --gray: #767676;
      --gray-heavy: #4e4e4e;
      --gray-darker: #434343;
      --gray-dark: #2a2a2a;

      --green: #11d100;
      
      --red: #b71d18;

      --letter-spacing-main: 0.06em; 

      // Misc
      --border: 2px solid var(--gray-dark);
      --border-radius: 9px;
      --left-right-paddings: 20px;

      // Heights
      --header-height: 56px;
      }
    `} />
  )
}
