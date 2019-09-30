import React, { Component } from "react"
import { graphql } from "gatsby"
import PostIcons from "../components/post-icons"
import Layout from "../layouts/layout"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <PostIcons node={currentPage} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
	query($id: String!) {
		wordpressPage(id: { eq: $id }) {
			title
			content
			date(formatString: "MMMM DD, YYYY")
		}
		site {
			id
			siteMetadata {
				title
			}
		}
	}
`