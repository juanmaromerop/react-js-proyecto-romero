
import { useContext, useEffect, useState } from "react"
import { ThemeCart } from "./CartProvider"
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, removeItem, clear, totalAmount} = useContext(ThemeCart);
    const [totalPrice, setTotalPrice] = useState(totalAmount)


    return (
        <>
            {cart.map((product, index) => (
                <div className="itemContainer" key={index}>
                    <img className="itemContainer-img" src={product.img} alt="" />
                    <h1 className="itemContainer-msj" key={index}>{product.item}</h1>
                    <h2 className="itemContainer-msj">Cantidad: {product.quantity}</h2>
                    <p className="itemContainer-msj">Precio: ${product.precio}</p>
                    <p className="itemContainer-msj">Precio Total: ${product.precio * product.quantity}</p>
                    <button className="itemContainer-button" onClick={() => removeItem(product.item)}>Eliminar Producto</button>
                </div>
            ))}
            {cart.length !== 0 ? <><h3 className="totalPrice">El precio total de la compra es de ${totalPrice}</h3> <Link className="itemContainer-buttonCompra" to={`/checkout?totalPrice=${totalPrice}`}>Finalizar Compra</Link> <button onClick={clear} className="itemContainer-button2">Eliminar todo</button></> : <Link className="itemContainer-button3" to="/">Volver al inicio</Link>}
        </>
    )
}