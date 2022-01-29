import { action } from 'typesafe-actions'

export function signInRequest({
  username,
  password,
}: {
  username: string
  password: string
}) {
  return action('@auth/SIGN_IN_REQUEST', {
    username,
    password,
  })
}

export function signInSuccess({
  name,
  token,
}: {
  name: string
  token: string
}) {
  return action('@auth/SIGN_IN_SUCCESS', {
    name,
    token,
  })
}

export function signInFailure() {
  return action('@auth/SIGN_IN_FAILURE')
}
