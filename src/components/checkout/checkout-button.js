
import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
  console.log('Stripe Token', token);
};

const Purchase = ({
 price, title, children, ...props
}) => (
  <StripeCheckout
    name="Pittsburgh Forge Rugby Club"
    description={title}
    token={onToken}
    amount={price * 100}
    stripeKey={'pk_test_0DB4TnJZJQUzXq2OG8L7CFgQ00cK5tzzU0'}
  >
    {children || <span {...props}>PURCHASE</span>}
  </StripeCheckout>
);
Purchase.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Purchase;