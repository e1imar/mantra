import Image from 'next/image';
import PriceWithDiscount from './PriceWithDiscount';
import styled from '@emotion/styled';

const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 247px;
`;

const CardTitle = styled.h4`
  text-align: center;
  border-bottom: var(--border);
  padding-bottom: 17px;
  margin-bottom: 7px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 280px;
  margin-bottom: 10px;
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const Sticker = styled.p`
  position: absolute;
  top: 17px;
  right: 12px;
`;

export default function Card({ sticker, title, price, image = 'https://themantra.ru/media/products/Mind_350.jpg' }) {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Sticker>
          {sticker}
        </Sticker>
        <Image alt={title} layout="fill" src={image} />
      </ImageWrapper>

      <CardTitle>{title}</CardTitle>
      <PriceWithDiscount defaultPrice={price} discountPrice={300} />
    </CardWrapper>
  )
};
