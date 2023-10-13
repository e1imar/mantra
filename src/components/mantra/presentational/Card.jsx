import Image from 'next/image';
import PriceWithDiscount from './PriceWithDiscount';
import styled from '@emotion/styled';
import Link from 'next/link';
import { PATH_MAIN } from '../../../routes/paths';
import PropTypes from "prop-types";

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

  &:hover {
    cursor: pointer;
  }
`;

const Sticker = styled.p`
  position: absolute;
  top: 17px;
  right: 12px;
`;

export default function Card({ id, sticker, title, price, image }) {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Sticker>
          {sticker}
        </Sticker>
          <Link href={PATH_MAIN.product(id)}>
            <a>
              <Image alt={title} layout="fill" src={image ?? 'https://themantra.ru/media/products/Mind_350.jpg'} />
            </a>
          </Link>
      </ImageWrapper>

      <CardTitle>{title}</CardTitle>
        {price && <PriceWithDiscount defaultPrice={price}/>}
    </CardWrapper>
  )
};

Card.propTypes = {
    id: PropTypes.number,
    sticker: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string
}