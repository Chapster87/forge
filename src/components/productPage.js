import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
	Container, Row, Col, Breadcrumb, BreadcrumbItem, Button
} from 'reactstrap';
import Slider from "react-slick";
import Img from 'gatsby-image'
import { ProductsContext } from './productsProvider'
import { CartContext } from './cartProvider'
import Variation from './variation'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import stylesPDP from "../styles/components/product.module.scss"

const ProductPage = ({ productId }) => {
  const { products } = useContext(ProductsContext)
  const { add, toggle } = useContext(CartContext)

  const product = products[productId]
  const variations = product.skus;

  return (
	<Container>
		<Row className="content">
			<Col xs="12">
				<div className="content-main">
					<Row>
						<Col xs="12" md="6" className={stylesPDP.pdpImages}>
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
							{/* <p>{product.id}</p> */}
							<p>{product.caption}</p>
							<p>{product.description}</p>

							<Variation data={product}/>

							<button
								type="button"
								className="btn btn-primary"
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
