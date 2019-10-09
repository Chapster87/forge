import { Link, graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import {
	Container, Row, Col
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SponsorBar from "../components/sponsorBar"

import stylesFooter from '../styles/components/footer.module.scss'

import forgeBlast from '../images/forge_blast_drop.png'

export default class Footer extends React.Component {
	render() {
		return (
			<React.Fragment>
				<SponsorBar />
				<footer className={stylesFooter.footer} role="contentinfo" itemType="http://schema.org/WPFooter">
					<Container>
						<Row>
							<Col xs="12" md="3">
								<div className="text-center">
									<Link to="/contact" className={stylesFooter.joinForgeLink}>
										<img src={forgeBlast} class={stylesFooter.blastLogo} alt="Pittsburgh Forge Rugby Club"/>
										<h3 className={stylesFooter.joinForgeHeadline}>Ready to get into the action?!<br/> Click here to conact us!</h3>
									</Link>
								</div>
							</Col>
							<Col xs="12" md="9">
								<Row className={stylesFooter.social}>
									<Col className={stylesFooter.socialWrap}>
										<h3 className={stylesFooter.socialHeader}>Find us on Social Media:</h3>
										<ul className={stylesFooter.socialLinks}>
											<li>
												<a href="https://www.facebook.com/pittsburghrugby" target="_blank">
													<span className="sr-only">Facebook</span>
													<FontAwesomeIcon icon={["fab", "facebook-square"]}/>
												</a>
											</li>
											<li>
												<a href="https://www.instagram.com/pittsburghrugby/" target="_blank">
													<span className="sr-only">Instagram</span>
													<FontAwesomeIcon icon={["fab", "instagram"]}/>
												</a>
											</li>
											<li>
												<a href="https://twitter.com/pittsburghrugby" target="_blank">
													<span className="sr-only">Twitter</span>
													<FontAwesomeIcon icon={["fab", "twitter-square"]}/>
												</a>
											</li>
										</ul>
										<hr className={stylesFooter.footerHr}/>
									</Col>
								</Row>
								<nav role="navigation" className={`${stylesFooter.footerNav} ${'row justify-content-center'}`}>
									<StaticQuery
										query={graphql`
											{
												allWordpressMenusMenusItems(filter: {slug: {eq: "footer"}}) {
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
											const footerMenuItems = data.allWordpressMenusMenusItems.edges[0].node.items;
											return (
												<React.Fragment>
													{footerMenuItems.map(item => {
														let fullURL = item.url,
															slug = fullURL.split("pghrugby.com")[1];

														return (
															(item.child_items ?
																<Col className="col-12 col-md-4 col-lg-3">
																	<Link
																		to={`${slug}`}
																		key={item.wordpress_id}
																		className={stylesFooter.footerNavHeader}
																	>
																		{item.title}
																	</Link>
																	<ul className={stylesFooter.footerSubMenu}>
																		{item.child_items && item.child_items.map((subitem) => {
																			let fullSubURL = subitem.url,
																			subSlug = fullSubURL.split("pghrugby.com")[1];

																			return (
																				<li>
																					<Link
																						to={`${subSlug}`}
																						key={item.wordpress_id}
																					>
																						{subitem.title}
																					</Link>
																				</li>
																			)
																		})}
																	</ul>
																</Col>
															:
																<Col className="col-12 col-md-4 col-lg-3">
																	<Link
																		to={`${slug}`}
																		key={item.wordpress_id}
																		className={stylesFooter.footerNavHeader}
																	>
																		{item.title}
																	</Link>
																</Col>
															)
														)
													})}
												</React.Fragment>
											);
										}}
									/>
								</nav>
							</Col>
						</Row>
					</Container>
					<Container fluid>
						<Row className="justify-content-center">
							<p className="copyright">©{new Date().getFullYear()} Pittsburgh Forge Rugby Club.</p>
						</Row>
					</Container>
				</footer>
			</React.Fragment>
		);
	}
}
