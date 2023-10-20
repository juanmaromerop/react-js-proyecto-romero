import { useContext, useState } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { ThemeCart } from "./CartProvider"
import { useLocation } from "react-router-dom"

export default function Checkout() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [orderId, setOrderId] = useState()
    const { cart, setCart } = useContext(ThemeCart)

    const location = useLocation()
    const totalPrice = new URLSearchParams(location.search).get("totalPrice");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const arroba = () => {
        if (!emailRegex.test(email)) {
            alert('El correo electrónico debe tener un formato válido. Ejemplo de formato válido: ejemplo@dominio.com');
        } else {
            addOrder();
        }
    }

    const addOrder = () => {
        const items = cart.map(item => ({
            name: item.item,
            quantity: item.quantity,
            price: item.precio
        }));
        const db = getFirestore()
        const order = {
            buyer: {
                name,
                email,
                phone
            },
            items,
            total: totalPrice
        }
        const ordenesRef = collection(db, "ordenes");
        addDoc(ordenesRef, order).then(result => {
            setOrderId(result.id)
            setCart([])
        })
    }
    if (orderId) {
        return <h1>Su compra se realizo con exito!!! Esta es su orden: {orderId}</h1>
    }


    return (
        <form className="formContainer" onSubmit={(e) => e.preventDefault()}>
            <label className="formContainer-label" htmlFor="">Name</label>
            <input className="formContainer-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label className="formContainer-label" htmlFor="">Email</label>
            <input className="formContainer-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className="formContainer-label" htmlFor="">Phone</label>
            <input className="formContainer-input" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button className="formContainer-button" onClick={arroba}>Finalizar Compra</button>
        </form>
    )
}