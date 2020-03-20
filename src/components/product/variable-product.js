import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import {
	Container, Row, Col, Breadcrumb, BreadcrumbItem, Button
} from 'reactstrap';
import ImageSlider from '../image-slider';
import ProductAddToCart from '../product-add-to-cart';
import ProductAttributeSelect from '../product-attribute-select';
import ProductPrice from '../product-price';
import ProductTabs from '../product-tabs';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import stylesPDP from "../../styles/components/product.module.scss"

const SimpleProduct = ({ product }) => {
    const productTabs = [
        {
            id: 'description',
            title: 'Description',
            content: product.description,
        },
        {
            id: 'attributes',
            title: 'Attributes',
            content: `<p>sku: ${product.sku}</p>`,
        },
    ];
    return (
      <Container>
        <Row className="content" sale={product.on_sale}>
          <Col xs="12">
            <div className="content-main">
              <Row>
                  <Col xs="12" md="6" className={stylesPDP.pdpImages}>
                      {product.images.length === 1 && (
                          <Img fluid={product.images[0].localFile.childImageSharp.fluid} alt={product.images[0].alt || product.images[0].name} style={{position: "relative"}}/>
                      )}
                      {product.images.length > 1 && <ImageSlider images={product.images} imageSize="350px" />}
                  </Col>
                  <Col xs="12" md="6" className="pdpDetails">
                      <h1>{product.name}</h1>
                      {/* <p>{product.id}</p> */}
                      <ProductPrice onSale={product.on_sale} regularPrice={product.regular_price} salePrice={product.sale_price} />
                      {product.attributes.map((attribute) => (
                            <ProductAttributeSelect attribute={attribute} key={attribute.name} />
                      ))}
                      <ProductAddToCart product={product} />
                  </Col>
                  <ProductTabs tabs={productTabs} />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

SimpleProduct.propTypes = {
    product: PropTypes.object.isRequired,
};

export default SimpleProduct;