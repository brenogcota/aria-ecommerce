import { useEffect, useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

import { useCart } from '@/contexts/useCart'
import api from '@/services/api'
import { formatCurrency } from '@/utils'

import {
  Container,
  PageHeader,
  PageTitle,
  Content,
  Card,
  ImageWrapper,
  Description,
  ProductName,
  ProductQuantity,
  ProductPrice,
  PageFooter,
  CartTotalPrice,
  NextStepButton,
} from './styles'

const Cart = () => {
  const { cartItems, removeItemFromCart, loadingCart } = useCart()
  const [totalCartPrice, setTotalCartPrice] = useState(0)

  const history = useHistory()

  document.title = 'Osirianos | Carrinho'

  useEffect(() => {
    if (cartItems.length > 0) {
      const totalPrice = cartItems.reduce((acc, elem) => {
        const value = elem.quantity * elem.price

        return (acc += value)
      }, 0)

      setTotalCartPrice(totalPrice)
    } else {
      setTotalCartPrice(0)
    }
  }, [cartItems])

  return (
    <Container>
      <PageHeader>
        <MdKeyboardArrowLeft size={24} onClick={() => history.push('/')} />

        <PageTitle>Carrinho de compras</PageTitle>
      </PageHeader>

      {loadingCart ? (
        <Content>
          <span>Buscando itens...</span>
        </Content>
      ) : (
        <Content>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <IoMdCloseCircle
                    size={20}
                    color="#333"
                    onClick={() => removeItemFromCart(item.id)}
                  />
                  <ImageWrapper>
                    <img src={item.image} alt={item.title} />
                  </ImageWrapper>
                  <Description>
                    <div>
                      <ProductName>{item.title}</ProductName>
                    </div>
                    <ProductQuantity>
                      <span>Quantidade: {item.quantity}</span>
                    </ProductQuantity>
                    <ProductPrice>{formatCurrency(item.price)}</ProductPrice>
                  </Description>
                </Card>
              ))}
            </>
          ) : (
            <span>Seu carrinho está vazio!</span>
          )}
        </Content>
      )}
      {cartItems.length > 0 && (
        <PageFooter>
          <CartTotalPrice>
            Total price: {formatCurrency(totalCartPrice)}
          </CartTotalPrice>

          <NextStepButton onClick={() => history.push('/checkout')}>
            Seguir para pagamento
          </NextStepButton>
        </PageFooter>
      )}
    </Container>
  )
}

export default Cart
