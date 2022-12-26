/* eslint-disable react/forbid-prop-types */
import PropType from 'prop-types';
import React from 'react';
import OrderItem  from './OrderItem';

const OrdersTable = ({ orderedItems }) => (
  <div>
    {orderedItems.length > 0 && (
      <div className="grid grid-product grid-count-6">
        <div className="grid-col" />
        <div className="grid-col">
          <h5>Name</h5>
        </div>
        {/* <div className="grid-col">
          <h5>Brand</h5>
        </div> */}
        <div className="grid-col">
          <h5>Price</h5>
        </div>
        <div className="grid-col">
          <h5>Date Added</h5>
        </div>
        <div className="grid-col">
          <h5>Qty</h5>
        </div>
      </div>
    )}
    {orderedItems.length === 0 ? new Array(10).fill({}).map((order, index) => (
      <OrderItem
        // eslint-disable-next-line react/no-array-index-key
        key={`product-skeleton ${index}`}
        order={order}
      />
    )) : orderedItems.map((order) => (
      <OrderItem
        key={order.orderId}
        order={order}
      />
    ))}
  </div>
);

OrdersTable.propTypes = {
  orderedItems: PropType.array.isRequired
};

export default OrdersTable;
