import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import stylesSponsorBar from '../styles/components/sponsorbar.module.scss'

import ruggersLogo from '../images/sponsors/ruggers.png'
import duganLogo from '../images/sponsors/dugan.png'
import essmcLogo from '../images/sponsors/essmc.png'

const SponsorBar = () => {
	return (
		<div className={stylesSponsorBar.sponsorBar}>
			<Container maxWidth="xl">
				<Grid container justify="center">
					<Grid item xs={12} md={3} className={stylesSponsorBar.sponsor} >
						<Typography component="div">
							<Link
								href="/dugan-associates-supports-pittsburghs-rugby-club"
								className="dugan"
							>
								<img src={duganLogo} alt="Dugan &amp; Associates" class={stylesSponsorBar.sponsorLogo}/>
							</Link>
						</Typography>
					</Grid>
					<Grid item xs={12} md={3} className={stylesSponsorBar.sponsor}>
						<Typography component="div">
							<Link
								href="/pittsburgh-forge-partners-with-essmc"
								className="essmc"
							>
								<img src={essmcLogo} alt="Eastern Suburbs Sports Medicine" class={stylesSponsorBar.sponsorLogo}/>
							</Link>
						</Typography>
					</Grid>
					<Grid item xs={12} md={3} className={stylesSponsorBar.sponsor}>
						<Typography component="div">
							<Link href="http://ruggerspub.com/" className="ruggers" target="_blank">
								<img src={ruggersLogo} alt="Ruggers Pub" class={stylesSponsorBar.sponsorLogo}/>
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default SponsorBar
