import {
  IS_AUTHENTICATING,
  IS_ORDERING,
  LOADING,
  SET_AUTH_STATUS,
  SET_REQUEST_STATUS,
} from '@/constants/constants'

export const setLoading = (bool = true) => ({
  type: LOADING,
  payload: bool,
})

export const setAuthenticating = (bool = true) => ({
  type: IS_AUTHENTICATING,
  payload: bool,
})

export const setRequestStatus = (status) => ({
  type: SET_REQUEST_STATUS,
  payload: status,
})

export const setAuthStatus = (status = null) => ({
  type: SET_AUTH_STATUS,
  payload: status,
})

export const setOrdering = (bool = true) => ({
  type: IS_ORDERING,
  payload: bool,
})
