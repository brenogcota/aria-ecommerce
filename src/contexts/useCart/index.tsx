import api from '@/services/api'
import { createContext, useContext, useState, useEffect } from 'react'

interface CartContextProps {
  cartItems: any[]
}

const CartContext = createContext({} as CartContextProps)

export const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [allProducts, setAllProducts] = useState<any[]>([])
  const [cartInfo, setCartInfo] = useState<any>({
    totalPrice: 0,
    shippingPrice: 0,
  })

  useEffect(() => {
    api.get('products').then((res) => {
      setAllProducts(res.data)
    })
  }, [])

  useEffect(() => {
    if (allProducts.length > 0) {
      api.get('carts').then((res) => {
        const itemsInCart = res?.data[1]?.products

        if (itemsInCart?.length > 0) {
          itemsInCart.forEach((item: any) => {
            const findedProduct = allProducts.find(
              (prod) => prod.id === item.productId
            )
            if (
              findedProduct &&
              !cartItems.find((prod) => prod.id === item.productId)
            )
              setCartItems((prev) => [
                ...prev,
                { ...findedProduct, quantity: item.quantity },
              ])
          })
        }
      })
    }
  }, [allProducts])

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  return context
}
