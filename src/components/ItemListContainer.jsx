import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"


export default function ItemListContainer({ greetings }) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

useEffect(() =>{
  setLoading(true)
  setTimeout(() => {
    if (category === undefined) {
      const db = getFirestore()
      const dataRef = collection(db, "hamburger")
      getDocs(dataRef).then((snapshot) =>{
        if (snapshot !== 0) {
          setLoading(false)
          setData(snapshot.docs.map((res) =>({id: res.id, ...res.data()})))
        }
      })
    } else {
      const db = getFirestore();
      const dataRef = query(collection(db, "hamburger"), where("categoria", "==", category));
      getDocs(dataRef).then((snapshot) =>{
        setLoading(false)
        setData(
          snapshot.docs.map((res) =>(
            {id: res.id, ...res.data()}
          ))
        )
      })
    }
        }, 700);
}, [category])




  if (loading) return <p className="loading">Cargando tus productos...</p>
  return (
    <>
      <h2 className="subtitle">{greetings}</h2>
      <div className="container">
        <ItemList data={data} />
      </div>
    </>

  )
}
