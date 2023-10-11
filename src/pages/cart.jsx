import { Stack } from '@mui/material';
import CartPageStep from '../components/mantra/CartPage/steps/CartPageStep';
import { useState } from 'react';
import { FinishIcon, WalletIcon } from '../components/mantra/CartPage/icons';
import {
  CartPageTitle,
  CartPageWrapper
} from '../components/mantra/CartPage/cart-page-styled-items';
import FormProvider from '../components/hook-form';
import { useForm } from 'react-hook-form';
import { CartPageFirstStep, CartPageSecondStep, CartPageThirdStep } from '../components/mantra/CartPage/steps';

export default function CartPage() {
  const methods = useForm({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      country: '',
      index: '',
      address: '',
      city: '',
      isWhatsapp: false,
      isTelegram: false,
    }
  });

  const [isSecondStepOpen, setIsSecondStepOpen] = useState(false);
  const [isThirdStepOpen, setIsThirdStepOpen] = useState(false);
  const [isFourthStepOpen, setIsFourthStepOpen] = useState(false);
  const [isFifthStepOpen, setIsFifthStepOpen] = useState(false);

  return (
    <FormProvider methods={methods}>
      <CartPageWrapper>
        <section style={{ gridArea: 'order' }}>
          <CartPageTitle>Оформление заказа</CartPageTitle>
          <Stack spacing="50px">
            <CartPageFirstStep btnClicked={() => {
              console.log(methods.getValues());
              setIsSecondStepOpen(!isSecondStepOpen);
            }} />
            <CartPageSecondStep btnClicked={() => setIsThirdStepOpen(!isThirdStepOpen)} isOpen={isSecondStepOpen} />
            <CartPageThirdStep btnClicked={() => setIsFourthStepOpen(!isFourthStepOpen)} isOpen={isThirdStepOpen} />
            <CartPageStep btnClicked={() => setIsFifthStepOpen(!isFifthStepOpen)}  isOpen={isFourthStepOpen} icon={WalletIcon} title="Шаг 4. Способ оплаты"/>
            <CartPageStep isOpen={isFifthStepOpen} icon={FinishIcon} btnLabel="Разместить заказ" title="Шаг 5. Размещение заказа"/>
          </Stack>
        </section>
      </CartPageWrapper>
    </FormProvider>
  )
}
