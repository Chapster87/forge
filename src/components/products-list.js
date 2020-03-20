import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ImageSlider from './image-slider';
import ProductPrice from './product-price';

const StyledProductList = styled('ul')`
    display: flex;
    flex-flow: row wrap;
    padding: 0;
`;

const StyledProductListItem = styled('li')`
    display: inline-flex;
    flex-direction: column;
    width: 33.33%;
    padding: 0 15px;
    align-items: center;
    margin-bottom: 40px;
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
    }
    @media screen and (max-width: 991px) {
        width: 100%;
    }
`;

const StyledProductName = styled(Link)`
    margin-top: 20px;
    font-size: 20px;
    color: #464442;
    text-decoration: none;
    transition: all .4s ease-in-out;
    &:hover,
    &:focus {
        color: #21759b;
    }
`;

const ProductsList = ({ products }) => {
    if (!products.length) {
        return <>No Products Available.</>;
    }
    return (
        <StyledProductList>
            {products.map((product) => {
                if (product.status !== 'publish') {
                    return null;
                }

                return (
                    <StyledProductListItem key={product.id} sale={product.on_sale}>
                        {product.images.length === 1 && (
                            <Img fluid={product.images[0].localFile.childImageSharp.fluid} alt={product.images[0].alt || product.images[0].name} />
                        )}
                        {product.images.length > 1 && <ImageSlider images={product.images} imageSize="300px" />}
                        <StyledProductName to={`/${product.slug}`}>{product.name}</StyledProductName>
                        <ProductPrice onSale={product.on_sale} regularPrice={product.regular_price} salePrice={product.sale_price} />
                        <Link to={`/${product.slug}`}>View Product</Link>
                    </StyledProductListItem>
                );
            })}
        </StyledProductList>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductsList;