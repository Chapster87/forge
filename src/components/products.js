import React, { useContext } from 'react'
import { ProductsContext } from './productsProvider'
import ProductThumbnail from './productThumbnail'

const Items = () => {
  const { listProducts } = useContext(ProductsContext)
  const products = listProducts()

  return (
    <div style={{ columnCount: 3 }}>
      {products.map(product => (
        <ProductThumbnail key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Items
