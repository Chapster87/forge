import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link, graphql, StaticQuery } from "gatsby"

import stylesNav from "../styles/components/navigation.module.scss"

import logo from '../images/pghforgerugby.png'

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

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

			const [selectedIndex, setSelectedIndex] = React.useState("")

			const handleClick = index => {
				if (selectedIndex === index) {
					setSelectedIndex("")
				} else {
					setSelectedIndex(index)
				}
			}

			return (
				<div className={stylesNav.mainNav}>
					<div className={stylesNav.mainNavBranding}>
						<Link to="/" className={stylesNav.navbarBrandLink}>
							<img src={logo} className={stylesNav.logo} alt="Pittsburgh Forge Rugby Club"/>
							<span className={stylesNav.headerTitle} itemType="http://schema.org/Organization">
								Pittsburgh Forge <span className="d-none d-md-inline d-lg-none d-xl-inline">Rugby Club</span>
							</span>
						</Link>
						<Link to="/contact" className={`${stylesNav.mobileMenuContact} ${'d-lg-none'}`}>
							<FontAwesomeIcon icon={"envelope"}/>
						</Link>
					</div>
					<List
						component="nav"
						className={stylesNav.siteNav}
					>
						{MenuItems.map((item, index) => {
							let fullURL = item.url;
							let	slug = fullURL.split("pghrugby.com")[1];

							return (
								(item.child_items ?
									<React.Fragment>
										<ListItem button 
											onClick={() => {
												handleClick(index)
											}}
											key={item.wordpress_id}
											className={stylesNav.navLink}
										>
											<ListItemText
											  className={stylesNav.navLinkText}
											  primary={item.title}
											/>
											{index === selectedIndex ? <ExpandLess /> : <ExpandMore />}
										</ListItem>
										<Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>
											<List component="div" disablePadding>
												{item.child_items && item.child_items.map((subitem) => {
													let fullSubURL = subitem.url;
													let subSlug = fullSubURL.split("pghrugby.com")[1];

													return (
														<ListItemLink
														  href={`${subSlug}`}
														  className={`${stylesNav.navLink} ${stylesNav.subNavLink}`}
														  key={item.wordpress_id}>
															<ListItemText
															  className={`${stylesNav.navLinkText} ${stylesNav.sucNavLinkText}`}
															  primary={subitem.title}
															/>
														</ListItemLink>
													)
												})}
											</List>
										</Collapse>
									</React.Fragment>
								:
									<React.Fragment>
										<ListItemLink 
										  href={`${slug}`}
										  key={item.wordpress_id}
										  className={stylesNav.navLink}
										>
											<ListItemText
											  className={stylesNav.navLinkText}
											  primary={item.title}
											/>
										</ListItemLink>
									</React.Fragment>
								)
							)
						})}
					</List>
				</div>
			);
		  }}
		/>
	  );
	}
  }