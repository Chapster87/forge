import React, { Component } from "react"
import { graphql } from "gatsby"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "../components/material/Button.js";
import Box from '@material-ui/core/Box';
import PropTypes from "prop-types"
import PostIcons from "../components/post-icons"

import Layout from "../layouts/layout"
import SEO from '../components/SEO';

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
    	<Layout>
			<SEO title={post.title} keywords={[``]} />
			<Container maxWidth="xl" component="article" className="post">
				<Grid container spacing={4} className="content">
					<Grid item xs={12} md={9} className="primary">
						<div className="content-main">
							<header class="wp-head">
								<Typography
									component="h1"
									variant="h1"
									dangerouslySetInnerHTML={{
										__html: post.title
									}}
								/>

								<p class="lead">
									by
									<a href="">Start Bootstrap</a>
								</p>

								<hr/>

								<PostIcons node={post} className={'published-date'}/>

								<hr className="mb-0" />

							</header>

							<div
								dangerouslySetInnerHTML={{
									__html: post.content
								}}
								className="wp-entry"
							/>
						</div>
					</Grid>

					<Grid item xs={12} md={3} className="secondary">
						<Box mb={3}>
							<Card>
								<CardHeader title="Categories"/>
								<CardContent>
									<Grid container>
										<Grid item xs={12} lg={6}>
											<ul className="list-unstyled mb-0">
												<li>
													<a href="">Web Design</a>
												</li>
												<li>
													<a href="">HTML</a>
												</li>
												<li>
													<a href="">Freebies</a>
												</li>
											</ul>
										</Grid>
										<Grid item xs={12} lg={6}>
											<ul className="list-unstyled mb-0">
												<li>
													<a href="">JavaScript</a>
												</li>
												<li>
													<a href="">CSS</a>
												</li>
												<li>
													<a href="">Tutorials</a>
												</li>
											</ul>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Box>

						<Box mb={3}>
							<Card>
								<CardHeader title="Card Title" subheader="Card Subtitle"/>
								<CardContent>
									<Typography component="p">Some quick example text to build on the card title and make up the bulk of the card's content.</Typography>
									<Button>Button</Button>
								</CardContent>
							</Card>
						</Box>

						<Box mb={3}>
							<Card>
								<CardHeader title="Side Widget"/>
								<CardContent>
									<Typography component="p">You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!</Typography>
								</CardContent>
							</Card>
						</Box>

					</Grid>

				</Grid>
			</Container>
    	</Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
	query($id: String!) {
    	wordpressPost(id: { eq: $id }) {
      		title
      		content
			  ...PostIcons
		}
    	site {
      		siteMetadata {
        		title
      		}
    	}
  	}
`