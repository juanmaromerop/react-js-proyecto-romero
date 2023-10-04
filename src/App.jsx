import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './components/CartProvider'
import Checkout from './components/Checkout'
import Cart from './components/Cart'

const  App = () => {

  return (
    <>
<CartProvider>
    <BrowserRouter>
    <NavBar />
    
    <Routes>
      <Route exact path='/' element={<ItemListContainer greetings={"Bienvenidos a Big Burguer!"} />} />
      <Route exact path='/category/:category' element={<ItemListContainer />}/>
      <Route exact path='/hamburger/:id' element={<ItemDetailContainer />}/>
      <Route exact path='/cart' element={<Cart/>} />
      <Route exact path='/checkout' element={<Checkout />} />
    </Routes>
    </BrowserRouter>
</CartProvider>

    </>
  )
}

export default App
