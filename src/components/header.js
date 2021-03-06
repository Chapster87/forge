import PropTypes from "prop-types"
import React from "react"
// import Cart from './cart'

import MainMenu from "../components/mainMenu"

import stylesHeader from "../styles/components/header.module.scss"

export default class Header extends React.Component {
	render() {
	  return (
		<header
			className={stylesHeader.header}
			role="banner"
			itemType="http://schema.org/WPHeader"
		>
			<MainMenu />
			{/* <Cart /> */}
		</header>
		);
	}
}
