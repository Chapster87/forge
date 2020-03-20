import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { useCart, useCartDispatch } from '../custom-hooks/use-cart';

const StyledInput = styled('input')`
    height: 100%;
    line-height: 1;
    width: 75px;
    padding: 0 15px;
    margin-right: 15px;
    @media screen and (max-width: 991px) {
        display: block;
        line-height: 32px;
        height: auto;
        margin-top: 2px;
        margin-bottom: 10px;
    }
`;

const ProductAddToCart = ({ product }) => {
    const [quantity, setQuantity] = React.useState(1);
    const cart = useCart();
    const setCart = useCartDispatch();
    const handleQuantityInputChange = React.useCallback((e) => {
        setQuantity(parseInt(e.target.value));
    });
    const handleAddToCart = React.useCallback(() => {
        const updatedCart = [...cart];
        const cartItemIndex = updatedCart.findIndex((item) => item.id === product.id);
        if (cartItemIndex !== -1) {
            updatedCart[cartItemIndex].quantity = cart[cartItemIndex].quantity + quantity;
            setCart({
                type: 'update',
                cart: updatedCart,
            });
        } else {
            setCart({
                type: 'update',
                cart: [
                    ...cart,
                    {
                        id: product.id,
                        name: product.name,
                        image: product.images.length ? product.images[0] : '',
                        quantity: quantity,
                    },
                ],
            });
        }
    }, [cart, setCart, quantity]);
    return (
        <div>
            <StyledInput aria-label="Product quanity to add to cart" type="number" min="1" value={quantity} onChange={handleQuantityInputChange} />
            <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
    );
};

export default ProductAddToCart;