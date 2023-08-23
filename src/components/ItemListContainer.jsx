const Greeting = ({text}) =>{

return(
    <h2 className="subtitle">{text}</h2>
)
}

export default function ItemListContainer(){

    return(
        <Greeting text={"Bienvenidos a Big Burguer"}/>
    )
}