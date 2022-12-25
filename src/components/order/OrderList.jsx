import { Boundary, MessageDisplay } from '@/components/common'
import PropType from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading } from '@/redux/actions/miscActions'
import { getOrders } from '@/redux/actions/orderActions'

const OrderList = (props) => {
  const { orders, isLoading, requestStatus, children, id } = props
  const [isFetching, setFetching] = useState(false)
  const dispatch = useDispatch()

  const fetchOrders = (id) => {
    setFetching(true)
    dispatch(getOrders(id))
  }

  // useEffect(() => {
  //   fetchOrders(id)

  //   window.scrollTo(0, 0)
  //   return () => dispatch(setLoading(false))
  // }, [orders])

  // useEffect(() => {
  //   setFetching(false);
  // }, [products.lastRefKey]);

  if (orders.length === 0 && !isLoading) {
    return (
      <MessageDisplay message={requestStatus?.message || 'No orders found.'} />
    )
  }
  // if (orders.length === 0 && requestStatus) {
  //   return (
  //     <MessageDisplay
  //       message={requestStatus?.message || 'Something went wrong :('}
  //       action={fetchProducts}
  //       buttonLabel="Try Again"
  //     />
  //   );
  // }

  return (
    <Boundary>
      {children}
      {/* Show 'Show More' button if products length is less than total products */}
      {orders.length < 5 && (
        <div className="d-flex-center padding-l">
          <button
            className="button button-small"
            disabled={isFetching}
            onClick={fetchOrders}
            type="button"
          >
            {isFetching ? 'Fetching Items...' : 'Show More Items'}
          </button>
        </div>
      )}
    </Boundary>
  )
}

export default OrderList
