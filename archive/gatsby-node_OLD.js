const path = require('path')
const slug = require('slug')
const slash = require(`slash`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Add slug for page generation.
  if (node.internal.type === 'StripeSku') {
    const value = slug(node.product.name, slug.defaults.modes['rfc3986'])
    createNodeField({
      node,
      name: 'slug',
      value
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
		allWordpressPage {
			edges {
				node {
					id
					path
					status
					template
				}
			}
		}
		allWordpressPost {
			edges {
				node {
					id
					path
					status
					template
					format
				}
			}
		}
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
	}

	// Access query results via object destructuring
	const { allWordpressPage, allWordpressPost } = result.data

	// Create Page pages.
	const pageTemplate = path.resolve(`./src/templates/page.js`)
	// We want to create a detailed page for each page node.
	// The path field contains the relative original WordPress link
	// and we use it for the slug to preserve url structure.
	// The Page ID is prefixed with 'PAGE_'
	allWordpressPage.edges.forEach(edge => {
	  // Gatsby uses Redux to manage its internal state.
	  // Plugins and sites can use functions like "createPage"
	  // to interact with Gatsby.
	  createPage({
		// Each page is required to have a `path` as well
		// as a template component. The `context` is
		// optional but is often necessary so the template
		// can query data specific to each page.
		path: edge.node.path,
		component: slash(pageTemplate),
		context: {
		  id: edge.node.id,
		},
	  })
	})
  
	const postTemplate = path.resolve(`./src/templates/post.js`)
	// We want to create a detailed page for each post node.
	// The path field stems from the original WordPress link
	// and we use it for the slug to preserve url structure.
	// The Post ID is prefixed with 'POST_'
	allWordpressPost.edges.forEach(edge => {
	  createPage({
		path: edge.node.path,
		component: slash(postTemplate),
		context: {
		  id: edge.node.id,
		},
	  })
	})

    // Create product pages
    const products = {}

    result.data.allStripeSku.edges.forEach(({ node }) => {
      products[node.product.id] = node.fields.slug
    })

    const productTemplate = path.resolve('src/templates/product.js')
    Object.entries(products).forEach(([id, slug]) => {
      createPage({
        path: 'shop/' + slug,
        component: productTemplate,
        context: { id }
      })
    })
  })
}
