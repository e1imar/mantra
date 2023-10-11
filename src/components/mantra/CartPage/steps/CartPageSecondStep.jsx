import CartPageStep from './CartPageStep';
import { HomeIcon } from '../icons';
import { RHFSelect, RHFTextField } from '../../../hook-form';
import { Stack } from '@mui/material';

export default function CartPageSecondStep(props) {
  return (
    <CartPageStep {...props} icon={HomeIcon} title="Шаг 2. Адрес доставки">
      <Stack spacing="43px">
        <Stack spacing="18px" direction="row" justifyContent="space-between">
          <RHFSelect name="country" label="Страна">
            <option value=""/>
            <option value="russia">Россия</option>
          </RHFSelect>
          <RHFTextField name="city" label="Город" required />
          <RHFTextField name="index" label="Индекс" required />
        </Stack>
        <RHFTextField name="address" label="Адрес. Пример: Лесная ул., д. 5, кв. 176" required />
      </Stack>
    </CartPageStep>
  )
}
