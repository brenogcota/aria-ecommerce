import { Switch, Route } from 'react-router-dom'

import Cart from '@/pages/Cart'
import Checkout from '@/pages/Checkout'
import Home from '@/pages/Home'
import Product from '@/pages/Product'

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/product/:id" component={Product} />
    <Route path="/cart" component={Cart} />
    <Route path="/checkout" component={Checkout} />
  </Switch>
)

export default Routes
