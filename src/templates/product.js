import React from 'react';
import Layout from "../layouts/layout"
import ExternalProduct from '../components/product/external-product';
import SimpleProduct from '../components/product/simple-product';
import VariableProduct from '../components/product/variable-product';

const ProductTemplate = ({ pageContext: { product, ...pageContext } }) => {
    const productLayout = getProductLayout(product);
    return <Layout title={product.name}>{productLayout}</Layout>;
};

const getProductLayout = (product) => {
    switch (product.type) {
        case 'simple':
            return <SimpleProduct product={product} />;
        case 'variable':
            return <VariableProduct product={product} />;
        case 'external':
            return <ExternalProduct product={product} />;
        default:
            return (
                <p>This product type is not supported yet.</p>
            );
    }
};

export default ProductTemplate;