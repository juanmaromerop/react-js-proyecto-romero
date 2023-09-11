export default function ItemDetail({nombre, img, precio, stock}){
return(
    <div className="itemDetail">
        <img className="itemDetail-img" src={img} alt="" />
        <h3 className="itemDetail-item">{nombre}</h3>
        <h4 className="itemDetail-item">Precio: ${precio}</h4>
        <p className="itemDetail-item">Stock: {stock}</p>
    </div>
)
}