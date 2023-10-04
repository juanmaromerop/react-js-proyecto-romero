import { useContext, useState } from "react"
import { ThemeCart } from "./CartProvider"
import { Link } from "react-router-dom"

export default function CartWidget() {
    const [count, setCount] = useState(0)
    const {cart} = useContext(ThemeCart)
    return (
        <div className="icon">
            <button className="icon-button"><Link  to="/cart" className="icon-button2 fa-solid fa-cart-shopping">{cart.length}</Link></button>
        </div>
    )
}