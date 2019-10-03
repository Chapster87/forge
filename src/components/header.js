import PropTypes from "prop-types"
import React from "react"
import Cart from './cart'
import {
	Navbar,
	NavbarToggler,
	NavbarBrand} from 'reactstrap';

import MainMenu from "../components/mainMenu"

import stylesHeader from "../styles/components/header.module.scss"

import logo from '../images/pghforgerugby.png'

export default class Header extends React.Component {
	render() {
	  return (
		<header
			className={stylesHeader.header}
			role="banner"
			itemscope
			itemtype="http://schema.org/WPHeader"
		>
			<Navbar light expand="md">
				<NavbarBrand href="/" className={stylesHeader.logoLink}>
					<img src={logo} className={stylesHeader.logo} alt="Pittsburgh Forge Rugby Club"/>
					<span className={stylesHeader.headerTitle} itemscope itemtype="http://schema.org/Organization">
						Pittsburgh Forge <span className={stylesHeader.titleRugbyClub}>Rugby Club</span>
					</span>
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<MainMenu />
				<Cart />
			</Navbar>
		</header>
		);
	}
}
