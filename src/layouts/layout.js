import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { CartProvider } from '../custom-hooks/use-cart';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFolderOpen, faTag, faCaretRight, faCaretLeft  } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookSquare, faInstagram, faTwitterSquare, faEnvelope, faFolderOpen, faTag, faCaretRight, faCaretLeft)

import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/global.scss"

const theme = createMuiTheme({
	breakpoints: {
	  // Define custom breakpoint values.
	  // These will apply to Material-UI components that use responsive
	  // breakpoints, such as `Grid` and `Hidden`. You can also use the
	  // theme breakpoint functions `up`, `down`, and `between` to create
	  // media queries for these breakpoints
	  values: {
		xs: 0,
		sm: 320,
		md: 768,
		lg: 1200,
		xl: 1440
	  }
	}
});

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
		<MuiThemeProvider theme={theme}>
			<CartProvider>
				<Header />
					<main>{children}</main>
				<Footer/>
			</CartProvider>
		</MuiThemeProvider>
	  )}
	/>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
