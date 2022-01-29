import { Reducer } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { StoreAction, StoreState } from './createStore'

export default (reducers: Reducer<StoreState, StoreAction>) => {
  const persistedReducer = persistReducer(
    {
      key: 'react-typescript-boilerplate',
      storage,
      whitelist: ['auth'],
    },
    reducers
  )

  return persistedReducer
}
