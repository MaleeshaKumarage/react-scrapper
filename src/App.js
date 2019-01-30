import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Mobiles from './Mobiles/Mobiles';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Shops  from './Shops/Shops';
import Laptops from './Laptops/Laptops';
import Accessories from './Accessories/Accessories';
import Home from './Home/Home';
import Brands from './Brands/Brands';
import Terms from './Terms/Terms';
import Contact from './Contact/Contact';
import Privacy from './Privacy/Privacy';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          
            <Header />
          
        
        <Route path="/" component ={Home} exact />
        <Route path="/laptops" component ={Laptops} />
        <Route path="/mobiles" component ={Mobiles} />
        <Route path="/accessories" component ={Accessories} />
        <Route path="/brands" component ={Brands} />
        <Route path="/shops" component ={Shops} />
        <Route path="/contactus" component ={Contact} />
        <Route path="/terms" component ={Terms} />
        <Route path="/privacy" component ={Privacy} />
        
          
            <Footer />
          
        
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
