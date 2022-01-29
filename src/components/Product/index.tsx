import * as S from './styles'

interface Props {
  image: string
  title: string
  price: number
  link: string
}

export function Product(props: Props) {
  return (
    <S.ProductContainer>
      <a href={props.link}>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <span>R$ {props.price}</span>
      </a>
    </S.ProductContainer>
  )
}
