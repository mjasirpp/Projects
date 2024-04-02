import { Route, Routes } from 'react-router-dom';
import './index.css'
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/> } />
        <Route path='/wishlist' element={<Wishlist/> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
