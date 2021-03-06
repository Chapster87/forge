import React from 'react';

const CartStateContext = React.createContext(undefined);
const CartDispatchContext = React.createContext(undefined);

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return action.cart;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const CartProvider = ({ children }) => {
    const windowGlobal = typeof window !== 'undefined' && window;
    const [state, setCart] = React.useReducer(cartReducer, []);
    React.useEffect(() => {
        setCart({
            type: 'update',
            cart: JSON.parse(windowGlobal.localStorage.getItem('woo-cart')) || [],
        });
    }, []);
    React.useEffect(() => {
        windowGlobal.localStorage.setItem('woo-cart', JSON.stringify(state));
    }, [state]);
    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={setCart}>{children}</CartDispatchContext.Provider>
        </CartStateContext.Provider>
    );
};

const useCart = () => {
    const context = React.useContext(CartStateContext);
    if (!context) {
        throw Error('useCart must be used within a CartProvider');
    }

    return context;
};

const useCartDispatch = () => {
    const context = React.useContext(CartDispatchContext);
    if (!context) {
        throw Error('useCartDispatch must be used within a CartDispatchContext');
    }

    return context;
};

export { CartProvider, useCart, useCartDispatch };