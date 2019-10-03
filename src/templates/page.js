import React, { Component } from "react";
import { graphql } from "gatsby";
import {
	Container, Row, Col, Card, CardHeader, CardImg,
	CardText, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PostIcons from "../components/post-icons";

import Layout from "../layouts/layout";
import SEO from '../components/SEO';

import stylesPage from "../styles/components/pages.module.scss";

class PageTemplate extends Component {
	render() {
		const currentPage = this.props.data.wordpressPage;

		return (
			<Layout>
				<SEO title={currentPage.title} keywords={[`About Us`]} />
				<article className="page container">
					<Row className="content">
						<div className={`${'primary'} ${'col-md-9'}`}>
							<div className="wp-content">
								<header class="wp-head">
									<h1
										dangerouslySetInnerHTML={{
											__html: (currentPage.acf.alt_page_title ? currentPage.acf.alt_page_title : currentPage.title)
										}}
									/>

									<hr className="mb-0" />
								</header>
								<div
									dangerouslySetInnerHTML={{
										__html: currentPage.content
									}}
									className="wp-entry"
							/>
							</div>
						</div>

						<div className={`${'secondary'} ${'col-md-3'}`}>
							<Card className="mb-4">
								<CardHeader tag="h4">Categories</CardHeader>
								<CardBody>
									<Row>
										<Col lg="6">
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
										</Col>
										<Col lg="6">
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
										</Col>
									</Row>
								</CardBody>
							</Card>

							<Card>
								<CardBody>
									<CardTitle>Card title</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
									<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
									<Button>Button</Button>
								</CardBody>
							</Card>

							<div class="card my-4">
								<h5 class="card-header">Side Widget</h5>
								<div class="card-body">
									You can put anything you want inside of these side widgets. They are easy to use, and feature the
									new Bootstrap 4 card containers!
								</div>
							</div>

						</div>

					</Row>
				</article>
			</Layout>
		);
	}
}

export default PageTemplate;

export const pageQuery = graphql`
	query($id: String!) {
		wordpressPage(id: { eq: $id }) {
			title
			content
			date(formatString: "MMMM DD, YYYY")
			acf {
				alt_page_title
			}
		}
		site {
			id
			siteMetadata {
				title
			}
		}
	}
`;
