import { Boundary } from '@/components/common'
import { OrderList, OrdersTable } from '@/components/order'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOrders } from '@/redux/actions/orderActions'
import { setLoading } from '@/redux/actions/miscActions'

// Just add this feature if you want :P

const UserOrdersTab = () => {
  const [isFetching, setFetching] = useState(false)
  const dispatch = useDispatch()
  const fetchOrders = (id) => {
    setFetching(true)
    setLoading(true)
    dispatch(getOrders(id))
    console.log('users order tab fetching order')
  }
  const orderStore = useSelector((state) => ({
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading,
    orders: state.orders,
    id: state.auth.id,
  }))
  const { orders, id } = orderStore
  console.log(orderStore, 'orderStore')
  useEffect(() => {
    fetchOrders(id)

    window.scrollTo(0, 0)
    return () => dispatch(setLoading(false))
  }, [])

  return (
    <div className="loader" style={{ minHeight: '80vh' }}>
      <h3>My Orders</h3>
      {orders.orderedItems.length !== 0 ? (
        orders.orderedItems.map(({ item }) => {
          console.log(item)
          const { selectedSize, quantity, orderId, name, brand } = item
          return (
            <Boundary key={orderId}>
              <p>{selectedSize}</p>
              <p>{quantity}</p>
              <p>{name}</p>
              <p>{brand}</p>
              <p>{orderId}</p>
              <p>{item.date}</p>
              <p>{item.time}</p>
              <OrderList {...orderStore}>
                <OrdersTable orders={orderStore.orders} />
              </OrderList>
            </Boundary>
          )
        })
      ) : (
        <strong>
          <span className="text-subtle">You don&apos;t have any orders</span>
        </strong>
      )}
    </div>
  )
}

export default UserOrdersTab
