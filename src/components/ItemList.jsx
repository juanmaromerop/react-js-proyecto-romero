import { useEffect, useState } from "react"
import Item from "./Item"


export default function ItemList({data}) {
return(
    <>
    {data.map((hamburger) =>(
       <Item  
       key={hamburger.id}
       id={hamburger.id}
       nombre={hamburger.nombre}
       precio={hamburger.precio}
       img={hamburger.img}
       />
    ))}
    </>
)
}
