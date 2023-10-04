import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import {doc, getDoc, getFirestore} from "firebase/firestore"


export default function ItemDetailContainer() {
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const dataRef = doc(db, "hamburger", id)
        getDoc(dataRef).then((snapshot) =>{
            if (snapshot.exists()) {
                setData({id: snapshot.id, ...snapshot.data()})
            }
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