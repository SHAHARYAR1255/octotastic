import {
  ORDER_SUCCESS,
  ORDER,
  GET_ORDERS,
  GET_ORDERS_SUCCESS,
} from '@/constants/constants'
export const order = (payload) => ({
  type: ORDER,
  payload,
})
export const orderSuccess = (payload) => ({
  type: ORDER_SUCCESS,
  payload,
})

export const getOrders = (id) => ({
  type: GET_ORDERS,
  payload: id,
})

export const getOrdersSuccess = (orders) => ({
  type: GET_ORDERS_SUCCESS,
  payload: orders,
})

// export const editOrdersSuccess = (products) => ({
//   type: EDIT_ORDER_SUCCESS,
//   payload: products
// });

// export const editOrders = (products) => ({
//   type: EDIT_ORDER,
//   payload: products
// });
