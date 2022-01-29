import styled from 'styled-components'

export const ProductContainer = styled.div`
  text-align: center;
  background-color: #f3f5f7;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 10px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
  }
  h3 {
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      color: #f55a2a;
    }
  }
  span {
    font-size: 18px;
    font-weight: bold;
  }
`
