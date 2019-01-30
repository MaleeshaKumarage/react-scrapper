import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  './bootstrap.svg';
import './Header.css';
// import {FaSistrix}from 'react-icons/fa';
// import Product from '../Product/Product';
// import card from '../Cards/card';
// import Category from '../Category/Category';
import Mobiles from '../Mobiles/Mobiles';
import Brands from '../../src/Brands/Brands';
import Shops from '../Shops/Shops';
import Home from '../../src/Home/Home';


class Header extends Component {
  render() {
    return (
      
      <div >
        <div class ="container">
      <div class="row">
        <div class="col-6">
        {/* <!-- Image and text --> */}
<nav class="navbar navbar-light ">
  <a class="navbar-brand" href="#">
    <img src={require('./bootstrap.svg')} width="30" height="30" class="d-inline-block align-top" alt=""/>
    Bootstrap
  </a>
</nav>
  </div>
        <div class="col-6">
        <ul class="nav justify-content-end">
  <li class="nav-item">
    <Link class="nav-link9" to="/contactus">Contact us</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link9" to="/privacy">Privacy Policy</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link9" to="/terms">Terms and condition</Link>
  </li>
  
</ul>
  </div></div>
      </div>
      
      
      <div class="row-2">
        <div class="container">
        <ul class="nav">
  <li class="nav-item">
    <Link class="nav-link " to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/mobiles">Mobiles</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/laptops">Laptops</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="/accessories">Accessories</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="/brands">Brands</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="/shops">Shops</Link>
  </li></ul>
     <div class="form">
    <input type="text" placeholder="Search" />
    <button id="btn">Go</button>
     </div>

  
        </div>
        
      </div>
  

    </div>
  
    )
  }
}

export default Header;