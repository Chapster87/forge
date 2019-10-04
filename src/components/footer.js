import { Link } from "gatsby"
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
								</Row>
								<nav role="navigation" className={`${stylesFooter.footerNav} ${'row'}`}>
									<Col className="text-center">
										<a href="https://pghrugby.com/about" className={stylesFooter.footerNavHeader}>About Us</a>
										<ul className={stylesFooter.footerSubMenu}>
											<li><a href="https://pghrugby.com/club-bylaws">Club Bylaws</a></li>
											<li><a href="https://pghrugby.com/membership">Club Membership</a></li>
											<li><a href="https://pghrugby.com/product/dues">Pay Dues</a></li>
											<li><a href="https://pghrugby.com/product/club-donation">Club Donation</a></li>
											<li><a href="http://www.steamrollerrugby.com/pittsburgh-forge-rugby/">Merchandise</a></li>
										</ul>
									</Col>
									<Col className="text-center">
										<a href="https://pghrugby.com/womens-club" className={stylesFooter.footerNavHeader}>Women’s Club</a>
										<ul className={stylesFooter.footerSubMenu}>
											<li><a href="https://pghrugby.com/womens-roster">Women’s Roster</a></li>
											<li><a href="https://pghrugby.com/womens-schedule">Women’s Schedule</a></li>
											<li><a href="https://pghrugby.com/womens-standings">Women’s Standings</a></li>
											<li><a href="https://pghrugby.com/contact">Contact Us</a></li>
										</ul>
									</Col>
									<Col className="text-center">
										<a href="https://pghrugby.com/mens-club" className={stylesFooter.footerNavHeader}>Men’s Club</a>
										<ul className={stylesFooter.footerSubMenu}>
											<li><a href="https://pghrugby.com/mens-roster">Men’s Roster</a></li>
											<li><a href="https://pghrugby.com/mens-schedule">Men’s Schedule</a></li>
											<li><a href="https://pghrugby.com/mens-standings">Men’s Standings</a></li>
											<li><a href="https://pghrugby.com/contact">Contact Us</a></li>
										</ul>
									</Col>
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
