import { useState } from "react"

export default function CartWidget() {
    const [count, setCount] = useState(0)
    return (
        <div className="icon">
            <button className="icon-button" onClick={() =>{setCount(count + 1)}}><i class="fa-solid fa-cart-shopping">{count}</i></button>
        </div>
    )
}