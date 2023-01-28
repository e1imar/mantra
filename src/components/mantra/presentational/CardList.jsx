import Card from './Card';
import styled from '@emotion/styled';

const CardsContainer = styled.ul`
  grid-area: cards;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 45px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 470px) {
    grid-template-columns: 1fr;
  }
`;

export default function CardList({ cardList }) {
  return (
    <CardsContainer>
      {cardList.map(({ price, sticker, title, id, image }) =>
        <Card
          price={price}
          title={title}
          sticker={sticker}
          image={image}
          key={id}
          id={id}
        />
      )}
    </CardsContainer>
  )
}
