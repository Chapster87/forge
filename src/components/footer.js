import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Box from '@material-ui/core/Box';

import SponsorBar from "../components/sponsorBar"
import stylesFooter from '../styles/components/footer.module.scss'
import forgeBlast from '../images/forge_blast_drop.png'

export default class Footer extends React.Component {
	render() {
		return (
			<React.Fragment>
				<SponsorBar />
				<footer className={stylesFooter.footer} role="contentinfo" itemType="http://schema.org/WPFooter">
					<Container maxWidth="xl">
						<Grid container spacing={2}>
							<Grid item xs={12} md={3}>
								<Typography component="div" align="center">
									<Link href="/contact" className={stylesFooter.joinForgeLink}>
										<img src={forgeBlast} class={stylesFooter.blastLogo} alt="Pittsburgh Forge Rugby Club"/>
										<h3 className={stylesFooter.joinForgeHeadline}>Ready to get into the action?!<br/> Click here to conact us!</h3>
									</Link>
								</Typography>
							</Grid>
							<Hidden mdDown><Grid item xs={0} md={1}></Grid></Hidden>
							<Grid container item xs={12} md={8}>
								<Grid container item className={stylesFooter.social}>
									<Grid item xs={12} className={stylesFooter.socialWrap}>
										<h3 className={stylesFooter.socialHeader}>Find us on Social Media:</h3>
										<ul className={stylesFooter.socialLinks}>
											<li>
												<Typography component="span">
													<Link href="https://www.facebook.com/pittsburghrugby" target="_blank">
														<span className="sr-only">Facebook</span>
														<FacebookIcon style={{ fontSize: 50 }} />
													</Link>
												</Typography>
											</li>
											<li>
												<Typography component="span">
													<Link href="https://www.instagram.com/pittsburghrugby/" target="_blank">
														<span className="sr-only">Instagram</span>
														<InstagramIcon style={{ fontSize: 50 }} />
													</Link>
												</Typography>
											</li>
											<li>
												<Typography component="span">
													<Link href="https://twitter.com/pittsburghrugby" target="_blank">
														<span className="sr-only">Twitter</span>
														<TwitterIcon style={{ fontSize: 50 }} />
													</Link>
												</Typography>
											</li>
										</ul>
										<hr className={stylesFooter.footerHr}/>
									</Grid>
								</Grid>
								<Grid component="nav" container item role="navigation" justify="center" className={stylesFooter.footerNav}>
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
																<Grid item xs={12} md={4} lg={4}>
																	<Box textAlign="center">
																		<Typography variant="p" component="h2">
																			<Link
																				href={`${slug}`}
																				color="inherit"
																				key={item.wordpress_id}
																				className={stylesFooter.footerNavHeader}
																			>
																				{item.title}
																			</Link>
																		</Typography>
																		<ul className={stylesFooter.footerSubMenu}>
																			{item.child_items && item.child_items.map((subitem) => {
																				let fullSubURL = subitem.url,
																				subSlug = fullSubURL.split("pghrugby.com")[1];

																				return (
																					<li>
																						<Typography component="span">
																							<Link
																								href={`${subSlug}`}
																								color="inherit"
																								key={item.wordpress_id}
																							>
																								{subitem.title}
																							</Link>
																						</Typography>
																					</li>
																				)
																			})}
																		</ul>
																	</Box>
																</Grid>
															:
																<Grid item xs={12} md={4} lg={3}>
																	<Box textAlign="center">
																		<Typography variant="p" component="h2">
																			<Link
																				href={`${slug}`}
																				color="inherit"
																				key={item.wordpress_id}
																				className={stylesFooter.footerNavHeader}
																			>
																				{item.title}
																			</Link>
																		</Typography>
																	</Box>
																</Grid>
															)
														)
													})}
												</React.Fragment>
											);
										}}
									/>
								</Grid>
							</Grid>
						</Grid>
					</Container>
					<Container maxWidth={false}>
						<Grid container justify="center">
							<Box my={2}>
								<p className="copyright">©{new Date().getFullYear()} Pittsburgh Forge Rugby Club.</p>
							</Box>
						</Grid>
					</Container>
				</footer>
			</React.Fragment>
		);
	}
}
