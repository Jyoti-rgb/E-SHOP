import React from 'react'
import './App.css';
import Home from "./views/Home/Home";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Checkout from './views/Checkout/Checkout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;