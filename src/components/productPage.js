import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
	Container, Row, Col, Breadcrumb, BreadcrumbItem, Button
} from 'reactstrap';
import Slider from "react-slick";
import Img from 'gatsby-image'
import { ProductsContext } from './productsProvider'
import { CartContext } from './cartProvider'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ProductPage = ({ productId }) => {
  const { products } = useContext(ProductsContext)
  const { skus } = useContext(ProductsContext)
  const { add, toggle } = useContext(CartContext)

  const product = products[productId]
  const variations = product.skus

  return (
	<Container>
		<Row className="content">
			<Col xs="12">
				<div className="content-main">
					<Row>
						<Col xs="12" md="6" className="pdpImages">
							<Slider className="pdpImgSlider">
								{product.skus[0].product.localFiles && (
									<Img fluid={product.skus[0].product.localFiles[0].childImageSharp.fluid} />
								)}
								{variations.map(variation => {
									return (
										<Img fluid={variation.localFiles[0].childImageSharp.fluid} />
									)
								})}
							</Slider>
						</Col>
						<Col xs="12" md="6" className="pdpDetails">
							<h1>{product.name}</h1>
							<p>{product.id}</p>
							{variations.map(variation => {

								return (
									<React.Fragment>
										<p>{variation.id} - {variation.attributes.name}</p>
										<p>${variation.price / 100}</p>
									</React.Fragment>
								)
							})}
							<div>{product.caption}</div>
							<br />
							<div style={{ textAlign: 'justify' }}>{product.description}</div>
							<button
								style={{ margin: '2rem auto' }}
								onClick={() => {
								add(product.skus[0].id)
								toggle(true)
								}}
							>
								Add To Cart
							</button>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	</Container>
  )
}

ProductPage.propTypes = {
  productId: PropTypes.string.isRequired
}

export default ProductPage
