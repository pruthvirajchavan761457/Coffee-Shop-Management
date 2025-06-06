import React from "react";
import LogoL from "../../img/MenuImage/LogoL.png";
import { Link } from "react-router-dom"; 
import "./Menu.css";



function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="logo mt-4">
            <img src={LogoL} className="w-50 h-100" alt="Logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="Container">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/About">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Contact">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Product">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Menu">
                    Menu
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="plp">
        <h1>
         Menu
        </h1>
        </div>
      <div className="big-container">
         <div className="Name">
        <h1>Cafe Menu</h1>
      </div>
      <div className="Container">
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <h2>Hot Coffee</h2>
              <div className="Menu">
                <p>Cappucino Rs.200</p>
                <p>Caffe latte Rs.235</p>
                <p>Velvet Coffee Rs.199</p>
                <p>Flat white Rs.499</p>
                <p>Cinnamon Coffee Rs.177 </p>
                <p>Espresso Rs.349</p>
                <p>Vanilla latte Rs.280 </p>
                <p>Filter Coffee Rs.320</p>
              </div>
            </div>
            <div class="col">
              <h3>Snacks</h3>
              <div className="Menu">
                <p>Sandwich Rs.90 </p>
                <p>Cottage Cheese Fry Rs.415 </p>
                <p>Garlic Bread Rs.139 </p>
                <p>Bread Sticks Rs.100 </p>
                <p>Veg Burger Rs.150</p>
                <p>Veg Pizza Rs.134</p>
                <p>Chicken Pockets Rs.170</p>
                <p>mexicon burger Rs.100</p>
              </div>
            </div>
          </div>
          <div class="container text-center">
            <div class="row align-items-start">
              <div class="col">
                <h4>Cold Coffee</h4>
                <div className="menus">
                <p>Vegan Shake Rs.675</p>
                    <p>Cold Coffee Rs.30</p>
                    <p>Cold Mocha Rs.360</p>
                    <p>iced tea Rs.200</p>
                    <p>Chilled latte Rs.70</p>
                    <p>Belgian Chocolate Rs.360</p>
                    <p>Crunchy Frappe Rs.144</p>
                    <p>Chocolate Shake Rs.50</p>
                </div>
              </div>
              <div class="col">
                <h5>Dessert</h5>
                <div className="menus">
                <p>Cheese Cake Rs.224 </p>
                    <p>Choco Fantacy Rs.495 </p>
                    <p>Brownie Rs.60 </p>
                    <p>Choco Fudge Rs.200 </p>
                    <p>Venilla Scoop Rs.200</p>
                    <p>Berry Cheescake Rs.350</p>
                    <p>Strawberry Cake Rs.699</p>
                    <p>Red velvet Cake Rs.699</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Menu;
