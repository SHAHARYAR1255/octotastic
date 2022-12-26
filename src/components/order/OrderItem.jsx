import { ImageLoader } from '@/components/common'
// import { EDIT_PRODUCT } from '@/constants/routes';
import {
  displayActionMessage,
  displayDate,
  displayMoney,
} from '@/helpers/utils'
import PropType from 'prop-types'
import React, { useRef } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'
// import { removeProduct } from '@/redux/actions/productActions';

export const OrderItem = ({ order }) => {
  // const dispatch = useDispatch();
  const history = useHistory()
  const orderRef = useRef(null)
  console.log(order, 'order')

  const onClickEdit = () => {
    // history.push(`${EDIT_PRODUCT}/${product.id}`);
  }

  const onDeleteProduct = () => {
    // productRef.current.classList.toggle('item-active');
  }

  const onConfirmDelete = () => {
    // dispatch(removeProduct(product.id));
    // displayActionMessage('Item successfully deleted');
    // productRef.current.classList.remove('item-active');
  }

  const onCancelDelete = () => {
    // productRef.current.classList.remove('item-active');
  }

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`item item-products ${!order.orderId && 'item-loading'}`}
        ref={orderRef}
      >
        <div className="grid grid-count-6">
          <div className="grid-col item-img-wrapper">
            {order.image ? (
              <ImageLoader
                alt={product.name}
                className="item-img"
                src={product.image}
              />
            ) : (
              <Skeleton width={50} height={30} />
            )}
          </div>
          <div className="grid-col">
            <span className="text-overflow-ellipsis">
              {order.item ? order.item.name : <Skeleton width={50} />}
            </span>
          </div>
          {/* <div className="grid-col">
            <span>{order.item.brand || <Skeleton width={50} />}</span>
          </div> */}
          <div className="grid-col">
            <span>
              {order.subtotal ? (
                displayMoney(order.subtotal)
              ) : (
                <Skeleton width={30} />
              )}
            </span>
          </div>
          <div className="grid-col">
            <span>
              {order.date ? displayDate(order.date) : <Skeleton width={30} />}
            </span>
          </div>
          <div className="grid-col">
            <span>
              {order.item ? order.item.quantity : <Skeleton width={20} />}
            </span>
          </div>
        </div>
        {/* {order.orderId && (
          <div className="item-action">
            <button
              className="button button-border button-small"
              onClick={onClickEdit}
              type="button"
            >
              Edit
            </button>
            &nbsp;
            <button
              className="button button-border button-small button-danger"
              onClick={onDeleteProduct}
              type="button"
            >
              Delete
            </button>
            <div className="item-action-confirm">
              <h5>Are you sure you want to delete this?</h5>
              <button
                className="button button-small button-border"
                onClick={onCancelDelete}
                type="button"
              >
                No
              </button>
              &nbsp;
              <button
                className="button button-small button-danger"
                onClick={onConfirmDelete}
                type="button"
              >
                Yes
              </button>
            </div>
          </div>
        )} */}
      </div>
    </SkeletonTheme>
  )
}

// OrderItem.propTypes = {
//   product: PropType.shape({
//     id: PropType.string,
//     name: PropType.string,
//     brand: PropType.string,
//     price: PropType.number,
//     maxQuantity: PropType.number,
//     description: PropType.string,
//     keywords: PropType.arrayOf(PropType.string),
//     imageCollection: PropType.arrayOf(PropType.object),
//     sizes: PropType.arrayOf(PropType.string),
//     image: PropType.string,
//     imageUrl: PropType.string,
//     isFeatured: PropType.bool,
//     isRecommended: PropType.bool,
//     dateAdded: PropType.number,
//     availableColors: PropType.arrayOf(PropType.string)
//   }).isRequired
// };

export default withRouter(OrderItem)
