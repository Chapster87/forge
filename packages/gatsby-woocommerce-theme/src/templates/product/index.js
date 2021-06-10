import React from "react";
import { isEmpty } from 'lodash';
import Layout from "../../components/layout";
import GroupProduct from "../../components/group-product";
import SingleProduct from "../../components/single-product";
import VariableProduct from "../../components/variable-product";
import SEO from "../../components/seo";
import { getOgImage } from "../../utils/functions";

const ProductPage = ( props ) => {
	const { product, product: { name, link, seo } } = props.pageContext;
	const productLayout = getProductLayout(product);

	return (
		<Layout>
			{
				!isEmpty( props.pageContext ) ? (
					<>
						<SEO
							title={ name }
							seoData={ seo }
							uri={ link }
							header={ { siteTitle: 'Gatsby WooCommerce Theme' } }
							openGraphImage={ getOgImage( seo ) }
						/>
						{productLayout}
					</>
				) : (
					<div>Something went wrong</div>
				)
			}
		</Layout>
	)
};

const getProductLayout = (product) => {
    switch (product.nodeType) {
        case 'SimpleProduct':
            return <SingleProduct product={ product }/>;
		case 'ExternalProduct':
            return <SingleProduct product={ product }/>;
        case 'VariableProduct':
            return <VariableProduct product={ product } />;
		case 'GroupProduct':
            return <GroupProduct product={ product } />;
        default:
            return (
                <p>This product type is not supported yet.</p>
            );
    }
};

export default ProductPage;

