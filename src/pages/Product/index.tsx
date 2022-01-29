import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useParams, useHistory } from 'react-router-dom'
import { useSpeechSynthesis } from 'react-speech-kit'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

import { useCart } from '@/contexts/useCart'
import api from '@/services/api'
import { Button } from 'antd'

import { Param, Product as ProductResponse } from './interfaces'
import { Container, Image, ImageContainer, Color } from './styles'

const colors = ['black', 'white', 'gray', 'pink', 'green', 'blue']
const sizes = ['XS', 'S', 'M', 'L']

const Product: React.FC = () => {
  const [product, setProduct] = useState<ProductResponse>()
  const [loading, setLoading] = useState<boolean>(false)
  const [message, setMessage] = useState('')

  const param: Param = useParams()
  const { speak } = useSpeechSynthesis()
  const { addToCart } = useCart()
  const history = useHistory()

  const commands = [
    {
      command: 'Descrição',
      callback: () =>
        setMessage(`A descrição do produto é ${product?.description}`),
    },
    {
      command: 'Cores',
      callback: () => console.log({ text: colors.join(' ') }),
    },
    {
      command: 'Tamanhos',
      callback: () => speak({ text: sizes.join(' ') }),
    },
    {
      command: 'Adicionar produto tamanho * na cor *',
      callback: (size: string, color: string) => handleProduct(size, color),
    },
  ]

  const { listening, browserSupportsSpeechRecognition } = useSpeechRecognition({
    commands,
  })

  const handleProduct = (size: string, color: string) => {
    setProduct({
      size,
      color,
      ...product,
    })
    addToCart(product)
    history.push('/cart')
  }

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    setLoading(true)
    const product = (await api.get(`/products/${param.id}`)).data
    setProduct(product)
    setLoading(false)
  }

  const readDescription = async () => {
    await SpeechRecognition.stopListening()
    await speak({ text: message })
  }

  if (loading) return <Spinner animation="border" />

  if (!browserSupportsSpeechRecognition) {
    alert('You browser doenst support Web Speech Recognition API')
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={product?.image} alt={product?.title} />
      </ImageContainer>

      <h2 aria-label={product?.title}>{product?.title}</h2>

      <p
        aria-label={`category ${product?.category}`}
        className="product-category"
      >
        {product?.category}
      </p>

      <p aria-label={`price ${product?.price}`} className="product-price">
        <strong>R$ {product?.price}</strong>
      </p>

      <p>Size</p>
      <div className="product-sizes">
        {sizes.map((size) => (
          <span aria-label={size} className="product-size" key={size}>
            {size}
          </span>
        ))}
      </div>

      <p>Color</p>
      <div className="product-colors">
        {colors.map((color) => (
          <Color aria-label={color} style={{ background: color }} key={color} />
        ))}
      </div>

      <Button type="primary" aria-label="Add To Cart" size="large">
        <FaShoppingCart style={{ margin: '0 10px' }} />
        Add To Cart
      </Button>

      <br />
      <br />

      <Button
        onClick={() =>
          listening ? readDescription() : SpeechRecognition.startListening()
        }
        aria-label="Buy with Voice"
        size="large"
      >
        {listening ? 'Stop' : 'Buy with Voice'}
      </Button>

      <br />
      <br />
      <br />
      <br />
      <h5>Description</h5>
      <h3 className="product-description" aria-label={product?.description}>
        {product?.description}
      </h3>
    </Container>
  )
}

export default Product
