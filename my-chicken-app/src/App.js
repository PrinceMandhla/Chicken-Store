import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About.js'
import Products from './components/Products'

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <route path = "/"element= {<Home/>}/>
          <route path = "/about" element = {<About/>}/>
          <route path = "/products" element = {<Products/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
