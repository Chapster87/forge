import React, { Component } from 'react'
import {
	Collapse,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap'
import { Link, graphql, StaticQuery } from "gatsby"

import stylesNav from "../styles/components/navigation.module.scss"

export default class MainMenu extends React.Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
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
				allWordpressMenusMenusItems {
					edges {
						node {
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
			const MenuItems = data.allWordpressMenusMenusItems.edges[1].node.items;
			return (
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
					{MenuItems.map(item => (
						(item.child_items ?
							<React.Fragment>
								<NavLink
									href={`${item.url}`}
									key={item.wordpress_id}
								>
									{item.title}
								</NavLink>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret
										className={stylesNav.menuLink}
										key={item.wordpress_id}
									>
									</DropdownToggle>
									<DropdownMenu right>
										{item.child_items && item.child_items.map((subitem) =>
										<DropdownItem key={item.wordpress_id}>
												<NavLink
													href={`${subitem.url}`}
													key={item.wordpress_id}
												>
													{subitem.title}
												</NavLink>
										</DropdownItem>
										)}
									</DropdownMenu>
								</UncontrolledDropdown>
							</React.Fragment>
						:
							(<NavItem>
								<NavLink
									href={`${item.url}`}
									className={stylesNav.menuLink}
									key={item.wordpress_id}
								>
									{item.title}
								</NavLink>
							</NavItem>)
						)
					))}
					</Nav>
				</Collapse>
			);
		  }}
		/>
	  );
	}
  }