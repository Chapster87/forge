import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled('div')`
    margin-top: 5px;
`;

const StyledRegularPrice = styled('span')`
    color: ${(props) => (props.sale ? colorRedDark : '#505050')};
    text-decoration: ${(props) => (props.sale ? 'line-through' : 'none')};
`;

const StyledSalePrice = styled('span')`
    margin-left: 5px;
    color: #006400;
`;

const ProductPrice = ({ onSale, regularPrice, salePrice }) => {
    if (!regularPrice) {
        return null;
    }
    if (!onSale) {
        return (
            <StyledWrapper>
                <StyledRegularPrice>{`$${parseFloat(regularPrice).toFixed(2)}`}</StyledRegularPrice>
            </StyledWrapper>
        );
    }

    return (
        <StyledWrapper>
            <StyledRegularPrice sale={onSale}>{`$${parseFloat(regularPrice).toFixed(2)}`}</StyledRegularPrice>
            <StyledSalePrice>{`$${parseFloat(salePrice).toFixed(2)}`}</StyledSalePrice>
        </StyledWrapper>
    );
};

ProductPrice.propTypes = {
    onSale: PropTypes.bool,
    regularPrice: PropTypes.string.isRequired,
    salePrice: PropTypes.string,
};

ProductPrice.defaultProps = {
    onSale: false,
};

export default ProductPrice;