import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import {
	Container, Row, Col
} from 'reactstrap'

import SponsorBar from "../components/sponsorBar"

import stylesFooter from '../styles/components/footer.module.scss'

export default class Footer extends React.Component {
	render() {
		return (
			<React.Fragment>
				<SponsorBar />
				<footer class="footer" role="contentinfo" itemtype="http://schema.org/WPFooter">
					<div id="inner-footer" class="wrap cf">
						<div class="footer__row row-1">
							<div class="footer__row--left">
								<div class="join-forge">
									<a href="/contact" class="join-forge__link">
										<img src="https://pghrugby.com/wp-content/themes/forge/library/images/forge_blast_drop.png" class="blast-logo" alt="Pittsburgh Forge Rugby Club"/>
										<h3 class="join-forge__headline">Ready to get into the action?!<br/> Click here to conact us!</h3>
									</a>
								</div>
							</div>
							<div class="footer__row--right">
								<div class="social">
									<h3 class="social__header">Find us on Social Media:</h3>
									<ul class="social__links">
										<li><a href="https://www.facebook.com/pittsburghrugby" target="_blank"><span class="visually-hidden">Facebook</span><i class="fab fa-facebook"></i></a></li>
										<li><a href="https://www.instagram.com/pittsburghrugby/" target="_blank"><span class="visually-hidden">Instagram</span><i class="fab fa-instagram"></i></a></li>
										<li><a href="https://twitter.com/pittsburghrugby" target="_blank"><span class="visually-hidden">Twitter</span><i class="fab fa-twitter"></i></a></li>
									</ul>
								</div>
								<nav role="navigation">
									<div class="footer-links cf">
										<ul id="menu-footer" class="nav footer-nav cf">
											<li id="menu-item-1457" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1457"><a href="https://pghrugby.com/about">About Us</a>
												<ul class="sub-menu">
													<li id="menu-item-1458" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1458"><a href="https://pghrugby.com/club-bylaws">Club Bylaws</a></li>
													<li id="menu-item-1459" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1459"><a href="https://pghrugby.com/membership">Club Membership</a></li>
													<li id="menu-item-1460" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-1460"><a href="https://pghrugby.com/product/dues">Pay Dues</a></li>
													<li id="menu-item-1461" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-1461"><a href="https://pghrugby.com/product/club-donation">Club Donation</a></li>
													<li id="menu-item-1462" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1462"><a href="http://www.steamrollerrugby.com/pittsburgh-forge-rugby/">Merchandise</a></li>
												</ul>
											</li>
											<li id="menu-item-1463" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1463"><a href="https://pghrugby.com/womens-club">Women’s Club</a>
												<ul class="sub-menu">
													<li id="menu-item-1464" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1464"><a href="https://pghrugby.com/womens-roster">Women’s Roster</a></li>
													<li id="menu-item-1465" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1465"><a href="https://pghrugby.com/womens-schedule">Women’s Schedule</a></li>
													<li id="menu-item-1466" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1466"><a href="https://pghrugby.com/womens-standings">Women’s Standings</a></li>
													<li id="menu-item-487" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-487"><a href="https://pghrugby.com/contact">Contact Us</a></li>
												</ul>
											</li>
											<li id="menu-item-1468" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1468"><a href="https://pghrugby.com/mens-club">Men’s Club</a>
												<ul class="sub-menu">
													<li id="menu-item-1469" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1469"><a href="https://pghrugby.com/mens-roster">Men’s Roster</a></li>
													<li id="menu-item-1470" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1470"><a href="https://pghrugby.com/mens-schedule">Men’s Schedule</a></li>
													<li id="menu-item-1471" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1471"><a href="https://pghrugby.com/mens-standings">Men’s Standings</a></li>
													<li id="menu-item-1467" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1467"><a href="https://pghrugby.com/contact">Contact Us</a></li>
												</ul>
											</li>
										</ul>
									</div>
								</nav>
							</div>
						</div>
						<div class="footer__row row-2">
							<p class="source-org copyright">©{new Date().getFullYear()} Pittsburgh Forge Rugby Club.</p>
						</div>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}
