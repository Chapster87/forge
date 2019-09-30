import React from 'react'
import { Link } from 'gatsby'

import Layout from "../layouts/layout"
import SEO from '../components/SEO'
import Products from '../components/products'

const ProductsPage = () => (
  <Layout>
    <SEO title="Products" />
	<Link to="/">Go back to the homepage</Link>
    <Products />
  </Layout>
)

export default ProductsPage
