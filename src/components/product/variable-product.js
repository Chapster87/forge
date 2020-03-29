import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ImageSlider from '../image-slider';
import ProductFields from '../product-fields';
import ProductAddToCart from '../product-add-to-cart';
import ProductAttributeSelect from '../product-attribute-select';
import ProductPrice from '../product-price';
import ProductTabs from '../product-tabs';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import stylesPDP from "../../styles/components/product.module.scss"

const SimpleProduct = ({ product }) => {
    const [selectedAttr, setSelectedAttr] = React.useState();

    const updateAttr = (attr) => {
      setSelectedAttr(attr);
    }

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
      <Container maxWidth="xl">
        <Grid container className="content" sale={product.on_sale}>
          <Grid container item xs={12}>
              <Grid container className="content-main" spacing={4}>
                  <Grid item xs={12} md={6} className={stylesPDP.pdpImages}>
                      {product.images.length === 1 && (
                          <Img fluid={product.images[0].localFile.childImageSharp.fluid} alt={product.images[0].alt || product.images[0].name} style={{position: "relative"}}/>
                      )}
                      {product.images.length > 1 && <ImageSlider images={product.images} imageSize="350px" />}
                  </Grid>
                  <Grid container item xs={12} md={6} className="pdpDetails" spacing={2}>
                      <Grid item xs={12}>
                        <Typography component="h1" variant="h1">
                            {product.name}
                        </Typography>
                      </Grid>
                      {/* <p>{product.id}</p> */}
                      <Grid item xs={12}>
                        <ProductPrice onSale={product.on_sale} regularPrice={product.regular_price} salePrice={product.sale_price} />
                      </Grid>
                      <Grid container item spacing={2} xs={12}>
                        {product.attributes.map((attribute) => (
                              <ProductAttributeSelect attribute={attribute} key={attribute.name} onAttrUpdate={updateAttr} />
                        ))}
                      </Grid>
                      <ProductFields prodID={product.id}/>
                      <Grid item xs={12}>
                        <ProductAddToCart product={product} />
                      </Grid>
                  </Grid>
                  <ProductTabs tabs={productTabs} />
              </Grid>

          </Grid>
        </Grid>
      </Container>
    );
};

SimpleProduct.propTypes = {
    product: PropTypes.object.isRequired,
};

export default SimpleProduct;