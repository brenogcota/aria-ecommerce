import { Switch, Route } from 'react-router-dom'

import Home from '@/pages/Home'
import Cart from '@/pages/Product'

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/product/:id" component={Cart} exact />
  </Switch>
)

export default Routes
