import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../React-Redux/CartSlice";
import { toast } from 'react-toastify'; 

import cropped from "../../img/ProductImage/New/cropped.webp";
import Tea from "../../img/ProductImage/New/Tea.jpeg";
import sandwich from "../../img/ProductImage/sandwich.jpeg";
import Cold from "../../img/ProductImage/New/Cold.webp";
import Burger from "../../img/ProductImage/Burger.avif"
import MB from "../../img/ProductImage/New/MB.webp";
import freshgrind from "../../img/ProductImage/fresh-grind.webp";
import Arabica from "../../img/ProductImage/Arabica.webp";
import Nescafe from "../../img/ProductImage/Nescafe.avif";
import filterCofee from "../../img/ProductImage/filterCofee.webp";
import LogoL from "../../img/ProductImage/LogoL.png";

const productsData = [
  { id: 1, name: "Cappuccino", price: 30, img: Tea },
  { id: 2, name: "Cafe Frappe", price: 30, img: cropped },
  { id: 3, name: "Cold Brew", price: 30, img: Cold },
  { id: 4, name: "Burger", price: 100, img: Burger },
  { id: 6, name: "Sandwich", price: 150, img: sandwich },
  { id: 7, name: "Madras Blend", price: 30, img: MB },
  { id: 8, name: "Leo Coffee", price: 30, img: freshgrind },
  { id: 9, name: "Arabica Coffee", price: 30, img: Arabica },
  { id: 10, name: "Nescafe Coffee", price: 30, img: Nescafe },
  { id: 12, name: "Filter Coffee", price: 30, img: filterCofee },
];

const Product = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.totalItems);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      dispatch(addToCart(product));
      toast.success(`${product.name} has been added to your cart!`);
    } else {
      toast.error('Please login to your account.'); 
      navigate('/login');
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setErrorMessage("Search field cannot be empty.");
      setFilteredProducts(productsData); 
      return;
    }
    setErrorMessage("");
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
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
          <div
            className="collapse navbar-collapse justify-content-end px-5 mt-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
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
              <li className="nav-item">
                <button
                  className="btn text-white"
                  onClick={toggleSearch}
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link position-relative" to="/Cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="position-absolute top-0 start-89 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                    <span className="visually-hidden">items in cart</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="Product text-center">
        <h1 className="text-white mb-3">PRODUCT</h1>
      </div>

      {isSearchVisible && ( 
        <div className="text-left px-5 py-4">
          <input
            type="text"
            placeholder="Search Product"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)} 
            className="form-control w-50 text-white"
          />
          {errorMessage && <p className="text-danger">{errorMessage}</p>} {/* Show error message if any */}
        </div>
      )}

      <div className="container text-left">
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-4 mb-4 mt-4" key={product.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title text-white">
                    {product.name} ${product.price}
                  </h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section>
        <footer>
          <div className="cd">
            <div className="main-class">
              <div className="row">
                <div className="col-md-3">
                  <div className="img">
                    <img src={LogoL} alt="Logo" />
                    <p className="mt-4">Durga Cafe</p>
                  </div>
                  {/* <div className="icon">
                    <i className="fab fa-facebook me-3"></i>
                    <i className="fab fa-twitter me-3"></i>
                    <i className="fab fa-linkedin me-3"></i>
                    <i className="fab fa-instagram me-3"></i>
                  </div> */}
                </div>
                <div className="col-md-3">
                  <div className="Contact">
                    <p>Contact Info</p>
                    <p>
                      <i className="fas fa-mug-hot i-contain"></i> Phone No.
                      9823407855
                    </p>
                    <p>
                      <i className="fas fa-envelope"></i> E-mail@example.com
                    </p>
                    <p>
                      <i className="fas fa-location-dot"></i> Shop No -2,
                      Sanskruti Pratibimba Apartments, Mayur Colony, Kothrud,
                      Pune, Maharashtra 411038
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <p>Opening Hours</p>
                  <p>Mon-Fri: 9am to 10pm</p>
                  <p>Sat-Sun: 10am to 11pm</p>
                </div>
                <div className="col-md-3">
                  <p>Quick Links</p>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="link text-white" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="link text-white" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="link text-white" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link className="link text-white" to="/Product">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="link text-white" to="/menu">
                        Menu
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Product;
