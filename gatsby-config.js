var proxy = require('http-proxy-middleware')

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
	siteMetadata: {
		title: `Pittsburgh Forge Rugby Club`,
		description: `Home of the Pittsburgh Forge Rugby Club`,
		author: `Andrew Chapman`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Pittsburgh Forge Rugby Club`,
				short_name: `The Forge`,
				start_url: `?utm_source=a2hs`,
				background_color: `#222`,
				theme_color: `#FFB81C`,
				display: `minimal-ui`,
				icon: `src/images/pghforgerugby.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				// your wordpress source
				baseUrl: `pghrugby.com`,
				protocol: `https`,
				// is it hosted on wordpress.com, or self-hosted?
				hostingWPCOM: false,
				// does your site use the Advanced Custom Fields Plugin?
				useACF: true,
				// Whitelisted routes using glob patterns
				includedRoutes: [
					"**/posts",
					"**/pages",
					"**/media",
					"**/categories",
					"**/tags",
					"**/taxonomies",
					"**/menus",
					"**/products/*"
				],
				// Blacklisted routes using glob patterns
				excludedRoutes: [
					"**/wc-analytics/*",
					"**/products/*",
					"**/reports/*",
					"**/indexation/*"
				]
			}
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Lato:400,400i,700,700i,900,900i', 'Oswald:400,500,600,700', 'Roboto:400,400i,500,500i,700,700i,900,900i']
				}
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
}


/* Commented WooCommerce Plugin
{
	resolve: '@pasdo501/gatsby-source-woocommerce',
	options: {
		// Base URL of Wordpress site
		api: 'pghrugby.com',
		https: true,
		api_keys: {
		consumer_key: 'ck_7d0c2ae176b0b2f7a344b572298f2ed4bdff497e',
		consumer_secret: 'cs_1f27daf21aedc8ccd3d9d58cc86e01eeddaeccc8',
		},
		// Array of strings with fields you'd like to create nodes for...
		fields: ['products', 'products/categories', 'products/attributes'],
		// Version of the woocommerce API to use
		// OPTIONAL: defaults to 'wc/v1'
		api_version: 'wc/v3'
	}
}
*/