import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import NavBar from './components/NavBar';
import Branches from "./components/Branches";
import TopBar from './components/TopBar';
import ProductPage from './components/ProductPage';
import Resources from './components/Resources'

function App() {
  return (
    <Router>
      <div className="App">
      <TopBar/>
        <Routes>
          <Route path = "/"element= {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/products" element = {<Products/>}/>
          <Route path = "/branches" element = {<Branches/>}/>
          <Route path = "/products/:id" element = {<ProductPage />}/>
          <Route path = "/resources" element = {<Resources/>}/>
        </Routes>
      <Footer/>
      </div>

    </Router>
    
  );
}

export default App;
