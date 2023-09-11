import { useEffect, useState } from "react"
import hamburgerJson from "../hamburgers.json"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const hamburgerId = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(hamburgerJson)
        }, 500)
    })
}
export default function ItemDetailContainer() {
    const [data, setData] = useState([])
    const { id } = useParams()


    useEffect(() => {
        hamburgerId(id).then((product) => {
            let resultado = product.find((hamburger) => hamburger.id == id);
            setData(resultado)
        })
    },[id])

    return (
        <>
        <ItemDetail 
          key={data.id}
          id={data.id}
          nombre={data.nombre}
          precio={data.precio}
          img={data.img}
          stock={data.stock}
        />
        </>
    )
}