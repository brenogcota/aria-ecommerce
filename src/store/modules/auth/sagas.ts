import { takeLatest, call, put, all } from 'redux-saga/effects'

import axios from 'axios'
import { ActionType } from 'typesafe-actions'

import history from '../../../services/history'
import * as actions from './actions'

export function* signIn({ payload }: ActionType<typeof actions.signInRequest>) {
  try {
    const { username, password } = payload

    const { data } = yield call(axios.post, '/api/auth', {
      username,
      password,
    })

    yield put(actions.signInSuccess({ name: data.name, token: data.token }))
    history.push('/')
  } catch (err) {
    yield put(actions.signInFailure())
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)])
