import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Checkout from './Components/Checkout/Checkout';
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Checkout/>
    </>
  );
}

export default App;
