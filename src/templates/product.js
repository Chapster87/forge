import React from 'react'
import Layout from "../layouts/layout"
import SEO from '../components/SEO';
import ProductPage from '../components/productPage'

const ItemTemplate = ({ pageContext: { id } }) => {
  return (
    <Layout>
    	<ProductPage productId={id} />
    </Layout>
  )
}

export default ItemTemplate
