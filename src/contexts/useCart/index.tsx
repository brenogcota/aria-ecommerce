import api from '@/services/api'
import { createContext, useContext, useState, useEffect } from 'react'

interface CartContextProps {
  cartItems: any[]
  removeItemFromCart: (id: number) => void
  loadingCart: boolean
  addToCart: (product: any) => void
}

const CartContext = createContext({} as CartContextProps)

export const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [allProducts, setAllProducts] = useState<any[]>([])
  const [loadingCart, setLoadingCart] = useState(true)

  const removeItemFromCart = (id: number) => {
    const filteredCart = cartItems.filter((item) => item.id !== id)

    setCartItems(filteredCart)
  }

  const addToCart = (product: any) => {
    setCartItems([product, ...cartItems])
  }

  useEffect(() => {
    api.get('products').then((res) => {
      setAllProducts(res.data)
    })
  }, [])

  useEffect(() => {
    setLoadingCart(false)
  }, [cartItems])

  // useEffect(() => {
  //   if (allProducts.length > 0) {
  //     setLoadingCart(true)
  //     api
  //       .get('carts')
  //       .then((res) => {
  //         const itemsInCart = res?.data[0]?.products

  //         if (itemsInCart?.length > 0) {
  //           itemsInCart.forEach((item: any) => {
  //             const findedProduct = allProducts.find(
  //               (prod) => prod.id === item.productId
  //             )
  //             if (
  //               findedProduct &&
  //               !cartItems.find((prod) => prod.id === item.productId)
  //             )
  //               setCartItems((prev) => [
  //                 ...prev,
  //                 { ...findedProduct, quantity: item.quantity },
  //               ])
  //           })
  //         }
  //       })
  //       .finally(() => setLoadingCart(false))
  //   }
  // }, [allProducts])

  return (
    <CartContext.Provider
      value={{ cartItems, removeItemFromCart, loadingCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  return context
}
