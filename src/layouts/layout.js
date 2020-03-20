/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { CartProvider } from '../custom-hooks/use-cart';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFolderOpen, faTag, faCaretRight, faCaretLeft  } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookSquare, faInstagram, faTwitterSquare, faEnvelope, faFolderOpen, faTag, faCaretRight, faCaretLeft)

import Header from "../components/header"
import Footer from "../components/footer"

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
		<React.Fragment>
		<CartProvider>
			<Header />
			<main>{children}</main>
			<Footer/>
		</CartProvider>
		</React.Fragment>
	  )}
	/>
  )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
