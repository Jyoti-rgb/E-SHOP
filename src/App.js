import React from "react";
import "./App.css";
import Home from "./views/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./views/Checkout/Checkout";
import Login from "./views/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
