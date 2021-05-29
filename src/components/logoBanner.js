import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import stylesLogoBanner from '../styles/components/logobanner.module.scss'

const LogoBanner = () => {
	return (
		<div className={stylesLogoBanner.banner}>
			<div className={stylesLogoBanner.inset}></div>
			<div className={stylesLogoBanner.bannerInner}>
				<div className={stylesLogoBanner.base}></div>
				<div className={stylesLogoBanner.leftCorner}></div>
				<div className={stylesLogoBanner.rightCorner}></div>
			</div>
		</div>
	)
}

export default LogoBanner
