import { useContext, useState } from "react"
import { ThemeCart } from "./CartProvider"
import { Link } from "react-router-dom"

export default function CartWidget() {
    const {cart} = useContext(ThemeCart)
    return (
        <div className="icon">
           <Link  to="/cart" className="icon-button2 fa-solid fa-cart-shopping">{cart.length}</Link>
        </div>
    )
}