import { ORDER_SUCCESS, GET_ORDERS_SUCCESS } from '@/constants/constants'

const initState = {
  orderedItems: [],
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        orderedItems: action.payload,
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
