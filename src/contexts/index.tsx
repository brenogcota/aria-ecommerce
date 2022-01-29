import { CartProvider } from './useCart'

export const Contexts: React.FC = ({ children }) => {
  return <CartProvider>{children}</CartProvider>
}
