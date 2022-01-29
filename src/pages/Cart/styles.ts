import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f5f5f5;

  width: 100vw;
  height: 100vh;

  max-width: 600px;

  margin: 0 auto;

  overflow-y: auto;
  overflow-x: hidden;

  padding: 16px;
`
export const PageHeader = styled.section`
  display: flex;
  justify-content: center;

  width: 70%;
  height: 64px;

  > svg {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 90vw;
  }
`
export const PageTitle = styled.h3`
  font-size: 20px;
  margin: 0 auto 16px;
`

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Card = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  background: #fff;
  padding: 16px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 90vw;

  max-width: 400px;

  &:not(:first-child) {
    margin-top: 16px;
  }

  > svg {
    position: absolute;
    right: -8px;
    top: -8px;
  }
`

export const ImageWrapper = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  img {
    object-fit: contain;
    height: 56px;
    width: 56px;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  width: auto;

  margin-right: 16px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`

export const ProductName = styled.span`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  font-size: 16px;
  font-weight: bold;
`

export const ProductQuantity = styled.div`
  margin: 8px 0;
  font-size: 12px;
  color: #aaa;
`

export const ProductPrice = styled.span`
  font-weight: bold;
  font-size: 16px;
`

export const PageFooter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: auto;

  padding: 24px 0;
`

export const CartTotalPrice = styled.span`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`

export const NextStepButton = styled.button`
  border: none;
  padding: 16px;
  border-radius: 8px;
  background: #222;
  color: #f5f5f5;
`
