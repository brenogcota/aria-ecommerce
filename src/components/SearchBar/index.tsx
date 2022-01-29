import { useState } from 'react'

import * as S from './styles'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  function handleSearch(e: any) {
    setSearch(e.target.value)
  }

  return (
    <S.SearchContainer>
      <input
        type="text"
        placeholder="O que você procura?"
        value={search}
        onChange={(e) => {
          handleSearch(e)
        }}
      />
      <hr />
      {search}
    </S.SearchContainer>
  )
}

export default SearchBar
