import { useBasket } from '@/hooks'
import PropType from 'prop-types'
import React from 'react'
import ProductItem from './ProductItem'
import { v4 as uuid } from 'uuid'
import { useHistory } from 'react-router-dom'

const ProductGrid = ({ products }) => {
  const { addToBasket, isItemOnBasket } = useBasket()
  const history = useHistory()
  const gotoProductPage = (p) => {
    history.pushState(`/product/${p.id}`)
  }
  return (
    <div className="product-grid">
      {products.length === 0
        ? new Array(12).fill({}).map((product, index) => (
            <ProductItem
              // eslint-disable-next-line react/no-array-index-key
              key={`product-skeleton ${index}`}
              product={product}
            />
          ))
        : products.map((product) => (
            <ProductItem
              key={uuid().slice(0, 8)}
              isItemOnBasket={isItemOnBasket}
              addToBasket={gotoProductPage}
              product={product}
            />
          ))}
    </div>
  )
}

ProductGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropType.array.isRequired,
}

export default ProductGrid
