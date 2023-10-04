import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
export default function NavBar() {

    return (
        <div>
            <header className="header">
                <nav className="navBar">
                    <div>
                       <Link to="/"><img className="img-title" src="https://res.cloudinary.com/dogupspl8/image/upload/v1670554885/Paginas/imagen4_lkdxrh.jpg" alt="" /></Link> 
                    </div>
                    <ul className="navBar-ul">
                        <li className="navBar-li"><Link className="navBar-link" to="/">Inicio</Link></li>
                        <li className="navBar-li"><Link className="navBar-link" to="/category/carne">Carne</Link></li>
                        <li className="navBar-li"><Link className="navBar-link" to="/category/pollo">Pollo</Link></li>
                        <li className="navBar-li"><Link className="navBar-link" to="/category/veggie">Veggie</Link></li>
                       
                    </ul>
                </nav>
                <CartWidget />
            </header>
            <div>
                <h1 className="title">BIG BURGER</h1>
            </div>
        </div>
    )
} 