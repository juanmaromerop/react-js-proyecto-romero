import CartWidget from "./CartWidget"
export default function NavBar() {

    return (
        <div>
            <header className="header">
                <nav className="navBar">
                    <div>
                        <img className="img-title" src="https://res.cloudinary.com/dogupspl8/image/upload/v1670554885/Paginas/imagen4_lkdxrh.jpg" alt="" />
                    </div>
                    <ul className="navBar-ul">
                        <li className="navBar-li"><a className="navBar-a" href="">Inicio</a></li>
                        <li className="navBar-li"><a className="navBar-a" href="">Menu</a></li>
                        <li className="navBar-li"><a className="navBar-a" href="">Contacto</a></li>
                        <li className="navBar-li"><a className="navBar-a" href="">Novedades</a></li>
                        <li className="navBar-li"><a className="navBar-a" href="">Nosotros</a></li>
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