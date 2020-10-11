import React, { Component } from 'react'
import {
	Collapse, Nav, NavItem, NavLink,
	Navbar, NavbarToggler, NavbarBrand,
	UncontrolledDropdown, DropdownToggle,
	DropdownMenu, DropdownItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link, graphql, StaticQuery } from "gatsby"

import stylesNav from "../styles/components/navigation.module.scss"

import logo from '../images/pghforgerugby.png'

export default class MainMenu extends React.Component {

	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
  	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	// componentDidMount() {
    //     // $(document).foundation();
	// }

	render() {
	  return (
		<StaticQuery
		  query={graphql`
			{
				allWordpressMenusMenusItems(filter: {slug: {eq: "main"}}) {
					edges {
						node {
							slug
							name
							count
							items {
								menu_order
								title
								url
								child_items {
									wordpress_id
									title
									url
								}
							}
						}
					}
				}
			}
		  `}
		  render={data => {
			const MenuItems = data.allWordpressMenusMenusItems.edges[0].node.items;
			return (
				<Navbar dark expand="lg" className={stylesNav.mainNav}>
					<div className={stylesNav.mainNavBranding}>
						<NavbarToggler onClick={this.toggleNavbar} />
						<NavbarBrand href="/" className={stylesNav.navbarBrandLink}>
							<img src={logo} className={stylesNav.logo} alt="Pittsburgh Forge Rugby Club"/>
							<span className={`${stylesNav.headerTitle} ${'d-none d-md-inline'}`} itemType="http://schema.org/Organization">
								Pittsburgh Forge <span className="d-none d-md-inline d-lg-none d-xl-inline">Rugby Club</span>
							</span>
						</NavbarBrand>
						<Link to="/contact" className={`${stylesNav.mobileMenuContact} ${'d-lg-none'}`}>
							<FontAwesomeIcon icon={"envelope"}/>
						</Link>
					</div>
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav navbar>
						{MenuItems.map(item => {
							let fullURL = item.url,
								slug = fullURL.split("pghrugby.com")[1];

							return (
								(item.child_items ?
									<React.Fragment>
										<UncontrolledDropdown nav inNavbar>
											<DropdownToggle nav caret
												className={stylesNav.menuLink}
												key={item.wordpress_id}
											>
											</DropdownToggle>
											<NavLink
												href={`${slug}`}
												className="pageLink"
												key={item.wordpress_id}
											>
												{item.title}
											</NavLink>
											<DropdownMenu right>
												{item.child_items && item.child_items.map((subitem) => {
													let fullSubURL = subitem.url,
													subSlug = fullSubURL.split("pghrugby.com")[1];

													return (
														<DropdownItem key={item.wordpress_id}>
															<NavLink
																href={`${subSlug}`}
																key={item.wordpress_id}
															>
																{subitem.title}
															</NavLink>
														</DropdownItem>
													)
												})}
											</DropdownMenu>
										</UncontrolledDropdown>
									</React.Fragment>
								:
									(<NavItem>
										<NavLink
											href={`${slug}`}
											className={stylesNav.menuLink}
											key={item.wordpress_id}
										>
											{item.title}
										</NavLink>
									</NavItem>)
								)
							)
						})}
						</Nav>
					</Collapse>
				</Navbar>
			);
		  }}
		/>
	  );
	}
  }