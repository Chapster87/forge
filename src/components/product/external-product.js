import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ImageSlider from '../image-slider';
import ProductPrice from '../product-price';
import ProductTabs from '../product-tabs';

const ProductWrapper = styled('div')`
    padding: 40px 0;
    display: flex;
    flex-flow: row wrap;
`;
const ProductLeft = styled('div')`
    display: inline-flex;
    flex-direction: column;
    width: 35%;
    padding: 0 15px;
    .gatsby-image-wrapper {
        &:before {
            display: ${(props) => (props.sale ? 'block' : 'none')};
            content: '${(props) => (props.sale ? 'Sale' : null)}';
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            background: #006400;
            color: white;
            padding: 7px 10px;
            line-height: 1;
        }
        max-width: 100%;
    }
    @media screen and (max-width: 1200px) {
        width: 50%;
    }
    @media screen and (max-width: 991px) {
        width: 100%;
    }
`;
const ProductRight = styled('div')`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    width: 65%;
    padding: 0 15px;
    ${ProductPrice} {
        font-size: 22px;
        margin: 0 0 5px 0;
    }
    @media screen and (max-width: 1200px) {
        width: 50%;
    }
    @media screen and (max-width: 991px) {
        width: 100%;
        margin-top: 25px;
    }
`;

const H1 = styled('h1')`
    margin-top: 0;
`;

const ExternalProduct = ({ product }) => {
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
        <ProductWrapper>
            <ProductLeft sale={product.on_sale}>
                {product.images.length === 1 && (
                    <Img fluid={product.images[0].localFile.childImageSharp.fluid} alt={product.images[0].alt || product.images[0].name} />
                )}
                {product.images.length > 1 && <ImageSlider images={product.images} imageSize="350px" />}
            </ProductLeft>
            <ProductRight>
                <H1>{product.name}</H1>
                <ProductPrice onSale={product.on_sale} regularPrice={product.regular_price} salePrice={product.sale_price} />
                <div dangerouslySetInnerHTML={{ __html: product.short_description }} />
                <Link target="_blank" to={product.external_url}>
                    Buy Now
                </Link>
            </ProductRight>
            <ProductTabs tabs={productTabs} />
        </ProductWrapper>
    );
};

ExternalProduct.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ExternalProduct;