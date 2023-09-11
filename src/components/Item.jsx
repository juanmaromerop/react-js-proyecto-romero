import { Link } from "react-router-dom";

export default function Item({nombre, precio, id, img }) {
    return (
            <div className="listContainer">
                <img src={img} alt="" />
                <h4 className="listContainer-item">{nombre}</h4>
                <p className="listContainer-item">Precio: ${precio}</p>
                <Link to={`/hamburger/${id}`} className="listContainer-item"><button className="listContainer-button">Ver Mas</button></Link >
            </div>
    )
}