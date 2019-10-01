/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from "../components/header"
import ProductsProvider from '../components/productsProvider'
import CartProvider from '../components/cartProvider'
import "../styles/global.scss"

const Layout = ({ children }) => (
	<StaticQuery
	  query={graphql`
		query SiteTitleQuery {
		  site {
			siteMetadata {
			  title
			}
		  }
		}
	  `}
	  render={data => (
		<>
		  <ProductsProvider>
			<CartProvider>
				<Header siteTitle={data.site.siteMetadata.title} />
				<main>{children}</main>
				<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
				</footer>
			</CartProvider>
		  </ProductsProvider>
		</>
	  )}
	/>
  )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
