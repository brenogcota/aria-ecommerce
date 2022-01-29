import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type AuthAction = ActionType<typeof actions>

export interface AuthState {
  readonly loadingSignInRequest: boolean
  readonly isSignedIn: boolean
  readonly error: boolean
  readonly name: string | null
  readonly token: string | null
}
