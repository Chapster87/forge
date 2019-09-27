import React, { Component } from 'react'
import { Link, graphql, StaticQuery } from "gatsby"

import stylesNav from "../styles/components/navigation.module.scss"

class MainMenu extends Component {

	componentDidMount() {
        // $(document).foundation();
	}

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
				<nav
					className={`${stylesNav.mainNav} ${'col-1'} ${'col-md-8'}`}
					role="navigation"
					itemscope
					itemtype="http://schema.org/SiteNavigationElement"
				>
					<span class="mm-btn hide-for-medium"><i class="fas fa-bars"></i></span>
					<ul className={`${stylesNav.menuMain} ${'dropdown'} ${'menu'}`} data-dropdown-menu>
						{MenuItems.map(item => (
						<li className={stylesNav.menuItem}>
							<Link
								className={stylesNav.menuLink}
								to={`${item.url}`}
								key={item.wordpress_id}
								>
								{item.title}
							</Link>
							<ul className={'menu'}>
								{item.child_items && item.child_items.map((subitem) =>
									<li key={item.wordpress_id}>
										<Link to={subitem.url}>
											{subitem.title}
										</Link>
									</li>
								)}
							</ul>
						</li>
						))}
					</ul>
				</nav>
			);
		  }}
		/>
	  );
	}
  }

export default MainMenu