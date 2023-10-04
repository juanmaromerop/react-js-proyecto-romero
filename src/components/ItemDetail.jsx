import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { ThemeCart } from "./CartProvider";

export default function ItemDetail({ nombre, img, precio, stock }) {

    const {cart, addItem} = useContext(ThemeCart)


    const [dato, setDato] = useState()

    const [visible, setVisible] = useState(false)
    const onAdd = (valor) => {
        setDato(valor)
        setVisible(true)
    }

    return (
        <>
            <div className="itemDetail">
                <img className="itemDetail-img" src={img} alt="" />
                <h3 className="itemDetail-item">{nombre}</h3>
                <h4 className="itemDetail-item">Precio: ${precio}</h4>
                <p className="itemDetail-item">Stock: {stock}</p>
                <ItemCount precio={precio} stock={stock} onAdd={onAdd} />
            {visible === true ? <Link className="itemDetail-compra" onClick={() =>{addItem(nombre, dato, stock, img, precio)}} to="/cart">Finalizar su Compra</Link> : null}
            </div>
        </>
    )
}