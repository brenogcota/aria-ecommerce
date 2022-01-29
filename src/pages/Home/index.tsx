import * as S from './styles'

import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()

  return (
    <S.Container>
      <h1>Hello World</h1>

      <span onClick={() => history.push('/cart')}>Ir para o carrinho</span>
    </S.Container>
  )
}

export default Home
