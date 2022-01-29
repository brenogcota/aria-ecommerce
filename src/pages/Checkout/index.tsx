import { useState, useEffect } from 'react'

import BoletoIcon from '@/assets/boleto-icon.svg'
import CreditCardIcon from '@/assets/credit-card-icon.svg'
import PixIcon from '@/assets/pix-icon.svg'

import {
  Container,
  PageTitle,
  Form,
  Label,
  Input,
  PaymentOptions,
  FinishButton,
} from './styles'

type PaymentSelectionProps = 'boleto' | 'pix' | 'creditCard'

const Checkout = () => {
  const [
    selectedPaymentMethod,
    setSelectedPaymentMethod,
  ] = useState<PaymentSelectionProps>('boleto')

  document.title = 'Osirianos | Checkout'

  const handleWithSelectedPaymenthMethod = (type: PaymentSelectionProps) => {
    setSelectedPaymentMethod(type)
  }

  return (
    <Container>
      <PageTitle>Preencha seus dados</PageTitle>

      <Form>
        <Input id="name" placeholder="Nome" type="text" />

        <Input id="email" placeholder="E-mail" type="email" />

        <Input
          id="phone"
          placeholder="Telefone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />

        <PaymentOptions>
          <div>
            <input
              type="radio"
              checked={selectedPaymentMethod === 'boleto'}
              onClick={() => handleWithSelectedPaymenthMethod('boleto')}
            />
            <img
              src={BoletoIcon}
              alt="Pagamento por boleto"
              onClick={() => handleWithSelectedPaymenthMethod('boleto')}
            />
          </div>

          <div>
            <input
              type="radio"
              checked={selectedPaymentMethod === 'pix'}
              onClick={() => handleWithSelectedPaymenthMethod('pix')}
            />

            <img
              src={PixIcon}
              alt="Pagamento por PIX"
              onClick={() => handleWithSelectedPaymenthMethod('pix')}
            />
          </div>

          <div>
            <input
              type="radio"
              checked={selectedPaymentMethod === 'creditCard'}
              onClick={() => handleWithSelectedPaymenthMethod('creditCard')}
            />

            <img
              src={CreditCardIcon}
              alt="Pagamento por Cartão de Crédito"
              onClick={() => handleWithSelectedPaymenthMethod('creditCard')}
            />
          </div>
        </PaymentOptions>
      </Form>

      <FinishButton>Pagar</FinishButton>
    </Container>
  )
}

export default Checkout
