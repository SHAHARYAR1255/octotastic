import { ORDER_SUCCESS, GET_ORDERS_SUCCESS } from '@/constants/constants'

// const initState = {}

export default (
  state = {
    orderedItems: [],
  },
  action,
) => {
  switch (action.type) {
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        orderedItems: action.payload.orderedItems,
      }
    case ORDER_SUCCESS:
      return {
        ...state,
        orderedItems: [...state.orderedItems, action.payload],
      }

    default:
      return state
  }
}
