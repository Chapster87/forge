import React from 'react';
import Button from "./material/CustomButtons/Button.js";
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { useCart, useCartDispatch } from '../custom-hooks/use-cart';

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
        <Row>
            <Col xs="2">
                <FormGroup>
                    <Input aria-label="Product quanity to add to cart" type="number" min="1" value={quantity} onChange={handleQuantityInputChange} />
                </FormGroup>
            </Col>
            <Col xs="10">
                <Button variant="contained" color="primary" onClick={handleAddToCart}>Add to Cart</Button>
            </Col>
        </Row>
    );
};

export default ProductAddToCart;