import { ORDER, GET_ORDERS } from '@/constants/constants'
// import { ACCOUNT } from '@/constants/routes';
import { displayActionMessage } from '@/helpers/utils'
import { call, put, select } from 'redux-saga/effects'
import { history } from '@/routers/AppRouter'
import firebase from '@/services/firebase'
import { setLoading, setOrdering, setRequestStatus } from '../actions/miscActions'
import { updateProfileSuccess } from '../actions/profileActions'
import { HOME } from '@/constants/routes'
import { clearBasket } from '@/redux/actions/basketActions'
import { resetCheckout } from '@/redux/actions/checkoutActions'
import { resetFilter } from '@/redux/actions/filterActions'
import { orderSuccess, getOrdersSuccess } from '@/redux/actions/orderActions'

function* handleError(e) {
  const obj = { success: false, type: 'order', isError: true }
  // yield put(setAuthenticating(false));

  switch (e.code) {
    // case 'auth/network-request-failed':
    //   yield put(setAuthStatus({ ...obj, message: 'Network error has occured. Please try again.' }));
    //   break;
    default:
      // yield put(setAuthStatus({ ...obj, message: e.message }));
      yield call(
        displayActionMessage,
        'Sorry, Order not placed!, Try again or contact us.',
        'info',
      )
      break
  }
}
function* initRequest() {
  yield put(setLoading(true))
  yield put(setRequestStatus(null))
}

function* orderSaga({ type, payload }) {
  switch (type) {
    case ORDER: {
      try {
        console.log('ORDER SAGA');
        yield put(setLoading(true));
        yield put(setOrdering(true));
        yield call(firebase.order, payload)
        // yield call(firebase.updateEmail, payload.password, payload.newEmail);
        yield call(
          displayActionMessage,
          'Order Placed Successfully!',
          'success',
        )
        yield put(setLoading(false))
        yield put(orderSuccess(payload))
        yield put(setOrdering(false));
        // yield call(history.push, '/profile');
        yield put(clearBasket())
        yield put(resetFilter())
        yield put(resetCheckout())
        console.log('adad2')

        yield call(history.push, HOME)
      } catch (e) {
        console.log(e.message, 'error')
        yield handleError(e)
      }
    }
    case GET_ORDERS:
      try {
        yield initRequest()
        const state = yield select()
        const result = yield call(firebase.getOrders, payload)
        console.log(result, 'result')
        if (result.length === 0) {
          // handleError('NO orders found.')
          return
        } else {
          yield put(getOrdersSuccess(result))
          yield put(setRequestStatus(''))
        }
        yield put(setLoading(false))
      } catch (e) {
        console.log(e)
        yield handleError(e)
      }
      break
    default: {
      throw new Error('Unexpected action type.')
    }
  }
}

export default orderSaga
