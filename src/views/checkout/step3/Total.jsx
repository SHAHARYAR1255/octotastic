import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons'
import { CHECKOUT_STEP_2, HOME } from '@/constants/routes'
import { useFormikContext } from 'formik'
import { displayMoney, displayActionMessage } from '@/helpers/utils'
import PropType from 'prop-types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setPaymentDetails } from '@/redux/actions/checkoutActions'
import { order } from '@/redux/actions/orderActions'
import { v4 as uuid } from 'uuid'

const Total = ({ isInternational, subtotal }) => {
  const { values } = useFormikContext()
  const history = useHistory()
  const dispatch = useDispatch()
  const onClickBack = () => {
    // destructure to only select left fields omitting cardnumber and ccv
    const { cardnumber, ccv, ...rest } = values

    dispatch(setPaymentDetails({ ...rest })) // save payment details
    history.push(CHECKOUT_STEP_2)
  }

  const { basket, checkout, auth } = useSelector((state) => ({
    basket: state.basket,
    checkout: state.checkout,
    auth: state.auth,
  }))
  const onConfirm = () => {
    // console.log(basket, checkout, shipping, payment, subtotal)
    const { selectedSize, quantity, id, name, brand } = basket[0]
    const orderPayload = {
      orderId: uuid().slice(0, 8),
      authId: auth.id,
      subtotal,
      checkout: checkout.shipping,
      item: {
        selectedSize,
        quantity,
        id,
        name,
        brand,
      },
      date: new Date().getDate(),
      time: new Date().getTime(),
    }
    console.log(orderPayload)
    console.log('onConfirm')
    dispatch(order(orderPayload))

    // displayActionMessage('Order confirmed.', 'success')
    // history.push(HOME)
  }
  return (
    <>
      <div className="basket-total text-right">
        <p className="basket-total-title">Total:</p>
        <h3 className="basket-total-amount">
          {displayMoney(subtotal)}
        </h3>
      </div>
      <br />
      <div className="checkout-shipping-action">
        <button
          className="button button-muted"
          onClick={() => onClickBack(values)}
          type="button"
        >
          <ArrowLeftOutlined />
          &nbsp; Go Back
        </button>
        <button className="button" onClick={() => onConfirm()} type="button">
          <CheckOutlined />
          &nbsp; Confirm
        </button>
      </div>
    </>
  )
}

Total.propTypes = {
  isInternational: PropType.bool.isRequired,
  subtotal: PropType.number.isRequired,
}

export default Total
