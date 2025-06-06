import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousal from "../../Components/React-Redux/Carousal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LogoL from "../../img/HomeImage/LogoL.png";
import CoffeeSteams from "../../img/HomeImage/Coffee-steams.avif";
import Coffeemn from "../../img/HomeImage/Coffeemn.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cof from "../../img/AboutImage/cof.avif";
import frepics from "../../img/AboutImage/frepics.png";
import day from "../../img/AboutImage/day.jpg";
import banner from "../../img/AboutImage/banner.webp";
import Heart from "../../img/AboutImage/Heart.png";
import Pexel from "../../img/AboutImage/Pexel.jpeg";
import Inters from "../../img/AboutImage/Inters.jpeg";
import lattes from "../../img/AboutImage/lattes.jpeg";
import Cups from "../../img/AboutImage/Cups.webp";
import cps from "../../img/AboutImage/cps.jpeg";
import holiday from "../../img/AboutImage/holiday.jpeg";
import hd from "../../img/AboutImage/hd.jpg";
import Cake from "../../img/AboutImage/Cake.jpeg";
import Stocks from "../../img/AboutImage/Stocks.jpg";
import pf from "../../img/AboutImage/pf.jpg";
import beans from "../../img/AboutImage/beans.png";
import "./Home.css";

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  // const card = [
  //   { id: 1, src: 'path_to_image1.jpg', alt: 'Coffee 1' },
  //   { id: 2, src: 'path_to_image2.jpg', alt: 'Coffee 2' },
  //   { id: 3, src: 'path_to_image3.jpg', alt: 'Coffee 3' },
  //   // Add more items as needed
  // ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out", // Smooth transition
    centerMode: false,
    arrows: false, // Removes left and right buttons
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="logo mt-4">
            <img src={LogoL} className="w-50 h-100" alt="Logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
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
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa-solid fa-circle-user"></i>
                  {user && <span className="ms-2 text-white">{user.name}</span>}
                </Link>
                <ul className="dropdown-menu">
                  {user ? (
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  ) : (
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <div className="banner px-4">
          <h1 className="text-white">
            FRESH COFFEE IN <br />
            THE MORNING
          </h1>
          <Link className="link text-white" to="/Learn">
          <button className="btn btn-primary mt-3">Learn More</button>                
          </Link> 
        </div>
      </section>

      {/* //Banner Section // */}

      <section className="container text-center py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={CoffeeSteams} alt="Coffee Steams" className="cs" />
          </div>
          <div className="col-md-6">
            <h2 className="text-primary">Welcome to Coffee Shop</h2>
            <h4 className="text-warning">
              Let's Enjoy With Our Beautiful Coffee
            </h4>
          </div>
        </div>
      </section>

      {/* <div className="banner px-4">
        <h1 className="text-white">FRESH COFFEE IN <br />THE MORNING</h1>
        <button className="btn btn-primary mt-3">Learn More</button>
      </div> */}

      {/* Welcome Section with Slider */}
      <section className="container text-center py-4">
        <p className="text-center text-white fs-3 py-4">
          A good day starts with a great cup of coffee.
        </p>
        <Slider {...sliderSettings}>
          <div>
            <img src={frepics} alt="frepics" className="image-slide" />
          </div>
          <div>
            <img src={Cake} alt="cof" className="image-slide" />
          </div>
          <div>
            <img src={day} alt="day" className="image-slide" />
          </div>
          <div>
            <img src={cps} alt="cp" className="image-slide" />
          </div>
          <div>
            <img src={Inters} alt="Inters" className="image-slide" />
          </div>
          <div>
            <img src={lattes} alt="latte" className="image-slide" />
          </div>
          <div>
            <img src={hd} alt="hd" className="image-slide" />
          </div>
          <div>
            <img src={Heart} alt="Heart" className="image-slide" />
          </div>
          <div>
            <img src={holiday} alt="holiday" className="image-slide" />
          </div>
          <div>
            <img src={Cups} alt="Cups" className="image-slide" />
          </div>
          <div>
            <img src={Inters} alt="Inters" className="image-slide" />
          </div>
          <div>
            <img src={pf} alt="pf" className="image-slide" />
          </div>
          <div>
            <img src={Stocks} alt="Stocks" className="image-slide" />
          </div>
          <div>
            <img src={Pexel} alt="Pexel" className="image-slide" />
          </div>
        </Slider>
      </section>

      {/* Carousel Section */}
      {/* <Carousal card={card} /> */}

      {/* Coffee Description Section */}
      <section className="Container text-center me-5 py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h6 className="text-white fs-5">
              We Make the Delicious Coffee for the Coffee Lovers
            </h6>
            <p className="text-danger ">
              Start Day with Fresh Coffee in the Morning
            </p>
          </div>
          <div className="col-md-6">
            <img src={Coffeemn} alt="Coffee Morning" className="cp" />
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="Container text-center py-5">
        <form>
          <div className="mb-4">
            <span className="text-white fs-5">SUBSCRIBE OUR NEWSLETTER</span>
            <p className="text-white">
              Sign up for 10% off on your first order! Plus, get exclusive first
              access to new coffee launches.
            </p>
          </div>
          <div className="input-group mb-3 justify-content-center">
            <input
              type="text"
              className="text-decoration-none p-3 px-5"
              placeholder="Enter your email"
            />
            <button className="btn bg-success px-5 text-white">Submit</button>
          </div>
        </form>
      </section>

      {/* Footer */}
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
                    <li className="list-style-none">
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
}

export default Home;
