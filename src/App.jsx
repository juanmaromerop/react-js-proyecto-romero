import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'

const  App = () => {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path='/' element={<ItemListContainer />} />
      <Route exact path='/category/:category' element={<ItemListContainer />}/>
      <Route exact path='/hamburger/:id' element={<ItemDetailContainer />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
