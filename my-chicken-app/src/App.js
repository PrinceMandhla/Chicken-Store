import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <NavBar/>
        <Routes>
          <Route path = "/"element= {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/products" element = {<Products/>}/>
        </Routes>
      <Footer/>
      </div>

    </Router>
    
  );
}

export default App;
