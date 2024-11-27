import { useState, createContext } from "react";
import PropTypes from "prop-types";

//1. crear contexto
export const CartContext = createContext()

//2. crear provider
export function CartProvider ({children}){
    const [cart, setCart] = useState([])

    const addtoCart = product =>{
        const productInCartIndex = cart.finIndex(item => item.id === product.id)
        if (productInCartIndex > 0){
            //forma seria usando structuredClone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
             return setCart(newCart)
        }

        // producto no esta en el carrito
        setCart(prevState =>(
            [
                ...prevState,
                {
                    ...product,
                    quantity: 1
                }
            ])
        )
    }
    const clearCart = ()=> {
        setCart([])
    }

    const removeFromCart = product =>{
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    return (
        <CartContext.Provider value={{cart, addtoCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired // 'children' debe ser un nodo React válido
};