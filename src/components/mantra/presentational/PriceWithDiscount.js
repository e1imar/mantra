import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { getMainColor } from '../../../utils/cssStyles';
import PropTypes from "prop-types";

const DefaultPrice = styled.h6`
  font: var(--font-inter);
  color: var(--gray);
  text-decoration: ${({ discountPrice }) => discountPrice ? 'line-through' : ''};
`;

const DiscountPrice = styled(DefaultPrice)`
  color: ${getMainColor};
`;

export default function PriceWithDiscount({ defaultPrice, discountPrice }) {

  return (
    <Stack spacing="13px" direction="row">
      <DefaultPrice discountPrice={discountPrice}>
        {defaultPrice}
        {!discountPrice && ' P'}
      </DefaultPrice>
      { discountPrice
        &&
        <DiscountPrice>
          {discountPrice + ' P'}
        </DiscountPrice>
      }
    </Stack>
  )
}

PriceWithDiscount.propTypes = {
    defaultPrice: PropTypes.number,
    discountPrice: PropTypes.number
}