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
		`gatsby-plugin-netlify-cms`,
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
					"**/menus"
				],
				// Blacklisted routes using glob patterns
				excludedRoutes: [
					"**/products/*"
				],
				searchAndReplaceContentUrls: {
					sourceUrl: "https://pghrugby.com",
					replacementUrl: "",
				},
			}
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Lato', 'Oswald', 'Roboto']
				}
			}
		},
		// {
		// 	resolve: '@pasdo501/gatsby-source-woocommerce',
		// 	options: {
		// 	   // Base URL of Wordpress site
		// 	  api: 'pghrugby.com',
		// 	  https: true,
		// 	  api_keys: {
		// 		consumer_key: 'ck_c3c6dc357dfe09f5a6104d4be2acf1bfe800d810',
		// 		consumer_secret: 'cs_fe6e24360a997d9b437d2acfee20f8fafd23ca47',
		// 	  },
		// 	  // Array of strings with fields you'd like to create nodes for...
		// 	  fields: ['products', 'products/categories'],
		// 	  // Version of the woocommerce API to use
		// 	  // OPTIONAL: defaults to 'wc/v1'
		// 	  api_version: 'wc/v3',
		// 	  // OPTIONAL: How many results to retrieve
		// 	  per_page: 100
		// 	}
		// }
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		`gatsby-plugin-stripe`,
		{
			resolve: `gatsby-source-stripe`,
			options: {
				objects: ['Product', 'Sku'],
				secretKey: process.env.STRIPE_SECRET_KEY,
				downloadFiles: true
			}
		}
	],
	// for avoiding CORS while developing Netlify Functions locally
	// read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
	developMiddleware: app => {
		app.use(
			'/.netlify/functions/',
			proxy({
				target: 'http://localhost:9000',
				pathRewrite: {
					'/.netlify/functions/': ''
				}
			})
		)
	}
}