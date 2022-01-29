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

export const PageTitle = styled.h3`
  font-size: 20px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 8px;
`

export const Label = styled.label``

export const Input = styled.input`
  padding: 8px 16px;
  border: 1px solid #ccc;
  background: #fff;
  color: #333;
  border-radius: 8px;
  width: 100%;

  &:not(:first-child) {
    margin-top: 16px;
  }
`

export const PaymentOptions = styled.section`
  display: flex;

  margin-top: 32px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:not(:last-child) {
      margin-right: 8px;
    }

    > input {
      cursor: pointer;
    }

    > img {
      width: 75px;
      height: 75px;
      cursor: pointer;
    }
  }
`

export const FinishButton = styled.button`
  background: #000;
  color: #f5f5f5;
  padding: 16px 32px;
  border: 0;
  border-radius: 8px;

  margin-top: 32px;
`
