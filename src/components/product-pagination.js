import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const ProductPagination = ({ pageCount, currentPage }) => {
    return (
        <ul>
            {[...Array(pageCount)].map((u, i) => {
                const link = i === 0 ? '/products' : `/products/${i + 1}`;
                return (
                    <li key={i}>
                        {currentPage === i + 1 ? <span>{currentPage}</span> : <Link to={link}>{i + 1}</Link>}
                    </li>
                );
            })}
        </ul>
    );
};

ProductPagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
};

export default ProductPagination;
