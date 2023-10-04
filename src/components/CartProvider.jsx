import { createContext, useState } from "react"
export const ThemeCart = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity, stock, img, precio) => {
        if (quantity > 0) {
            const cartIndex = cart.findIndex((cartItem) => cartItem.item === item)
            if (cartIndex !== -1) {
                const updatedCart = cart.map((cartItem, index) => {
                    if (index === cartIndex) {
                        const newQuantity = cartItem.quantity + quantity
                        const updatedQuantity = newQuantity <= stock ? newQuantity : stock
                        return { ...cartItem, item, quantity: updatedQuantity, precio: precio * quantity, img: img }
                    } else {
                        return cartItem
                    }
                })
                setCart(updatedCart)
            } else {
                const updatedQuantity = quantity <= stock ? quantity : stock
                const updatedCart = [...cart, { item, quantity: updatedQuantity, precio: precio * quantity, img: img }]
                setCart(updatedCart)
            }
        }
    }
    const removeItem = (itemId) => {
        if (cart.length !== 0) {
            const product = cart.filter((element) => element.item !== itemId);
            setCart(product)

        }
    }

    const clear = () => {
        if (cart.length !== 0) {
            setCart([])
        }
    }

    return (
        <ThemeCart.Provider value={{ cart, addItem, removeItem, clear, setCart}}>
            {children}
        </ThemeCart.Provider>
    )
}
