import styled from '@emotion/styled';

export const CartPageWrapper = styled.article`
  display: grid;
  grid-template-areas: 
                        '. order . cart .'
                        '. order . cart .';
  grid-template-columns: 3% 1.1fr 8% 0.8fr 3%;

`;

export const CartPageTitle = styled.h1`
  font: var(--font-robot-heading);
  font-weight: 300;
  font-size: 22px;
  letter-spacing: var(--letter-spacing-main);
  margin-bottom: 18px;
`;

export const CartPageFirstStepWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 40px;
  column-gap: 18px;
`;
