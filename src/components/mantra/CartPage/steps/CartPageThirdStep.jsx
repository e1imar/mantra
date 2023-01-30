import styled from '@emotion/styled';
import Image from 'next/image';
import CartPageStep from './CartPageStep';
import { TruckIcon } from '../icons';
import { Stack } from '@mui/material';
import { getBgColor, getMainColor } from '../../../../utils/cssStyles';
import { useState } from 'react';

const DeliveryTable = styled.table`
  font: var(--font-roboto);
  letter-spacing: var(--letter-spacing-main);
  --border-selected: 2px solid ${getBgColor};
  --border-selected-radius: 10px;
  border-spacing: 0;
  
  td, th {
    padding: 8px;
    white-space: nowrap;
  }

  tr td {
    border-top: var(--border-selected);
    border-bottom: var(--border-selected);

    &:last-of-type {
      border-top-right-radius: var(--border-selected-radius);
      border-bottom-right-radius: var(--border-selected-radius);
      border-right: var(--border-selected);
    }

    &:first-of-type {
      border-top-left-radius: var(--border-selected-radius);
      border-bottom-left-radius: var(--border-selected-radius);
      border-left: var(--border-selected);
    }
  }

  tr.selected td {
    border-color: ${getMainColor};
  }
    
  tbody tr:hover {
    cursor: pointer;
  }
`;

const HeadCell = styled.th`
  font: inherit;
  font-size: 14px;
  letter-spacing: inherit;
  text-align: left;
`;

const TitleCell = styled.td`
  font: inherit;
  font-size: 16px;
`;

const ValueCell = styled.td`
  font-size: 16px;
  text-align: center;
`;


const DELIVERY_METHODS = [
  {
    title: 'Почта России - доставка до отделения',
    imgSrc: '/assets/mantra/russian-delivery.png',
    daysToDeliver: '10 - 12',
    price: 290,
  },
  {
    title: 'EMC международное отправление',
    imgSrc: '/assets/mantra/russian-delivery.png',
    daysToDeliver: '10 - 12',
    price: 450,
  },
]

export default function CartPageThirdStep(props) {
  const [selectedRow, setSelectedRow] = useState(-1);

  return (
    <CartPageStep {...props} icon={TruckIcon} title="Шаг 3. Выбор способа доставки">
      <DeliveryTable>
        <thead>
        <tr>
          <HeadCell>Название службы</HeadCell>
          <HeadCell>Срок в днях</HeadCell>
          <HeadCell>Цена</HeadCell>
        </tr>
        </thead>
        <tbody>
          {DELIVERY_METHODS.map(({ title, imgSrc, daysToDeliver, price }, i) => (
            <tr key={i} onClick={() => setSelectedRow(i)} className={i === selectedRow ? 'selected' : ''}>
              <TitleCell>
                <Stack spacing={1} direction="row" justifyContent="space-between" alignItems="center">
                  <span>{title}</span>
                  <div>
                    <Image layout="fixed" width="50px" height="24px" src={imgSrc} />
                  </div>
                </Stack>
              </TitleCell>
              <ValueCell>{daysToDeliver}</ValueCell>
              <ValueCell>{price} R</ValueCell>
            </tr>
          ))}
        </tbody>
      </DeliveryTable>
    </CartPageStep>
  );
}
