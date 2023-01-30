import CartPageStep from './CartPageStep';
import { PersonWithChecked } from '../icons';
import { CartPageFirstStepWrapper } from '../cart-page-styled-items';
import { RHFCheckbox, RHFTextField } from '../../../hook-form';
import { Stack } from '@mui/material';

export default function CartPageFirstStep(props) {
  return (
    <CartPageStep {...props} isOpen icon={PersonWithChecked} title="Шаг 1. Личные данные">
      <CartPageFirstStepWrapper>
        <RHFTextField name="name" label="Имя" required />
        <RHFTextField name="surname" label="Фамилия" required />
        <RHFTextField name="email" label="E-mail" required />
        <RHFTextField name="phone" label="Телефон" required />
        <Stack direction="row" spacing="30px" justifyContent="flex-end" style={{ gridColumnStart: 1, gridColumnEnd: 'span 2' }}>
          <RHFCheckbox name="isWhatsapp" label="What's App" />
          <RHFCheckbox name="isTelegram" label="Telegram" />
        </Stack>
      </CartPageFirstStepWrapper>
    </CartPageStep>
  )
}
