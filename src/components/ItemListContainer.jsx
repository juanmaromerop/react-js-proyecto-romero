import { useEffect, useState } from "react"
import hamburgerJson from "../hamburgers.json"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

 
function getProducto() {
    return new Promise((resolve => {
      setTimeout(() => {
        resolve(hamburgerJson)
      }, 1500);
    }))
}
export default function ItemListContainer() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()



    useEffect(() => {
        getProducto(category).then(products => {
          let itemsFilter = hamburgerJson.filter(element => element.categoria == category);
          if (category === undefined) {
            setData(products)
            setLoading(false)
          }
          else {
            setData(itemsFilter)
            setLoading(false)
          }
        })
      }, [category])

    if (loading) return <p className="loading">Cargando tus productos...</p>
    return(
        <div className="container">
            <ItemList data={data} />

        </div>
            
    )
}
