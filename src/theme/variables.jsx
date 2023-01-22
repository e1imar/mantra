import { css, Global } from '@emotion/react';

export default function Variables() {
  return (
    <Global styles={css`
      :root {
        
      //  Fonts
        --font-inter: 500 16px 'Inter', sans-serif;
      //  Fonts
      
      
      // Colors
      --gray-light: #c6c6c6;
      --gray: #767676;
      --gray-darker: #434343;
      --gray-dark: #2a2a2a;


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
