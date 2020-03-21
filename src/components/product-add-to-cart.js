import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "./material/CustomButtons/Button.js";
import { Row, Col } from 'reactstrap';
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
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <TextField id="outlined-basic" type="number" label="Qty" variant="outlined" min="1" value={quantity} aria-label="Product quanity to add to cart" onChange={handleQuantityInputChange}/>
            </Grid>
            <Grid item xs={10}>
                <Button variant="contained" color="primary" onClick={handleAddToCart}>Add to Cart</Button>
            </Grid>
        </Grid>
    );
};

export default ProductAddToCart;