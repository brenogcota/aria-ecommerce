import { useEffect, useState } from 'react'

import api from '@/services/api'

import Header from '@/components/Header'
import { Product } from '@/components/Product'

import * as S from './styles'

interface Product {
  id: number
  title: string
  image: string
  price: number
}

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api
      .get('/products')
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log('Não encontramos nenhum produto' + err)
      })
  }, [])

  return (
    <S.Container>
      <Header />
      {products.map((product: Product) => {
        return (
          <Product
            link={`/product/${product.id}`}
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        )
      })}
    </S.Container>
  )
}

export default Home
