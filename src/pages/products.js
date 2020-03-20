import React from 'react'
import { Link } from 'gatsby'
import Layout from "../layouts/layout"
import SEO from '../components/SEO'
import ProductPagination from '../components/product-pagination';
import ProductsList from '../components/products-list';

const ProductsTemplate = ({ products }) => {
    return (
        <Layout>
            <SEO title="Products" />
            <Link to="/">Go back to the homepage</Link>
            <ProductsList products={products} />
            {/* <ProductPagination pageCount={pageContext.pageCount} currentPage={pageContext.currentPage} /> */}
        </Layout>
    );
}

export default ProductsTemplate;
