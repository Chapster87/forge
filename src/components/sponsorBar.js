import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import {
	Container, Row, Col
} from 'reactstrap'

import stylesSponsorBar from '../styles/components/sponsorbar.module.scss'

import ruggersLogo from '../images/sponsors/ruggers.png'
import duganLogo from '../images/sponsors/dugan.png'
import essmcLogo from '../images/sponsors/essmc.png'

const SponsorBar = () => {
	return (
		<div className={stylesSponsorBar.sponsorBar}>
			<Container>
				<Row>
					<Col className={stylesSponsorBar.sponsor} xs="12" md="4">
						<Link
							to="/dugan-associates-supports-pittsburghs-rugby-club"
							className="dugan"
						>
							<img src={duganLogo} alt="Dugan &amp; Associates" class={stylesSponsorBar.sponsorLogo}/>
						</Link>
					</Col>
					<Col className={stylesSponsorBar.sponsor} xs="12" md="4">
						<Link
							to="/pittsburgh-forge-partners-with-essmc"
							className="essmc"
						>
							<img src={essmcLogo} alt="Eastern Suburbs Sports Medicine" class={stylesSponsorBar.sponsorLogo}/>
						</Link>
					</Col>
					<Col className={stylesSponsorBar.sponsor} xs="12" md="4">
						<a href="http://ruggerspub.com/" className="ruggers" target="_blank">
							<img src={ruggersLogo} alt="Ruggers Pub" class={stylesSponsorBar.sponsorLogo}/>
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default SponsorBar
