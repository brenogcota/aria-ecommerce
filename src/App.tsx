import { BrowserRouter as Router } from 'react-router-dom'

import { Contexts } from './contexts'
import Routes from './routes'
import GlobalStyle from './styles/global'

const App = () => {
  return (
    <Contexts>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </Contexts>
  )
}

export default App
