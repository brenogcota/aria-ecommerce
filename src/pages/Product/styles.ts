import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.25rem 0.696rem;

  .product {
    &-category {
      font-size: 22px;
      margin-bottom: 2rem;
    }
    &-price {
      font-size: 28px;
    }

    &-description {
      font-size: 24px;
    }

    &-colors {
      display: flex;
      margin: 20px 0 40px;
    }

    &-sizes {
      display: flex;
      margin: 20px 0;
    }

    &-size {
      padding: 0.75rem;
      border-radius: 6px;
      border: 1px solid #ccc;
      margin: 0 6px;
      font-size: 18px;
    }
  }

  button {
    font-size: 22px;
    height: 52px;
    width: 100%;
  }
`

export const Image = styled.img`
  width: 220px;
`

export const ImageContainer = styled.div`
  margin: 0.698rem auto;
  width: 220px;
  min-height: 314px;
`

export const Color = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 100%;
  border: 1px solid #eee;

  margin: 0 6px;
`
