import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi from the home page</h1>
    <p>Welcome.</p>
    <Link to="/products">Go to the products</Link>
  </Layout>
)

export default IndexPage
