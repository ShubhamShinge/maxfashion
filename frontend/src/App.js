import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Cart from './components/Pages/Cart.js';
import Homepage from './components/Pages/Homepage.js';
import Footer from './components/Footer/Footer.js';
import Checkout from './components/checkout/Checkout';

function App() {
  
  const [logModalIsOpen, setLoginModalIsOpen] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
      <Header logModalIsOpen={logModalIsOpen} setLoginModalIsOpen={setLoginModalIsOpen}/>
        <Routes>
          <Route exact path='/' element={<Homepage setLoginModalIsOpen={setLoginModalIsOpen} />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
