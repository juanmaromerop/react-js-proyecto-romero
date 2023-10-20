import { useEffect, useState } from "react"

export default function ItemCount({ precio, stock, onAdd }) {

  const [count, setCount] = useState(1)
  const [total, setTotal] = useState(count * precio) 
  const subtract = () => {
    if (count <= 1) {
      return
    }
    setCount(count - 1)
  }
  const Add = () => {
    if (count >= stock) {
      return
    }
    setCount(count + 1)
  }
  const calculateTotal = () => {
    return count * precio;
  };

  
  return (
    <div className="itemCount">
      <div className="itemCount-container">
        <button className="itemCount-button" onClick={subtract}>-</button>
        <p>{count}</p>
        <button className="itemCount-button" onClick={Add}>+</button>
      </div>
      <div className="itemCount-cotainer2">
        <button onClick={() =>{onAdd(count)}} className="itemCount-button2">Añadir al Carrito</button>
        {total > 0 ? <p className="itemCount-cotainer2-p">Su total es de ${calculateTotal()}</p> : null}
      </div>

    </div>
  )
}