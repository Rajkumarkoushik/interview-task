import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Pricing from './components/Pricing';
import Started from './components/Started';
import Login from './components/Login';


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/started" element={<Started/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
