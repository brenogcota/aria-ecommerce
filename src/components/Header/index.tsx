import SearchBar from '../SearchBar'
import * as S from './style'

const Header = () => {
  return (
    <S.Header>
      <div>
        <h1>Aria Ecommerce</h1>
        <SearchBar />
      </div>
    </S.Header>
  )
}

export default Header
