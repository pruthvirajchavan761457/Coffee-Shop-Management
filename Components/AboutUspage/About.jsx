import React from "react";
import LogoL from "../../img/AboutImage/LogoL.png";
import "./About.css";
import hd from "../../img/AboutImage/hd.jpg";
import { Link } from "react-router-dom"; 






function About() {
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
      <div className="About py-4">
        <h1>ABOUT US</h1>
      </div>
      <section>
        <div className="sen">
          <div class="container text-center">
            <div class="row align-items-start">
              <div class="col">
                <img src={hd} alt="hd" />
              </div>
              <div class="col">
                <h4>What Makes Our Coffee Special</h4>
                <h3>Start day with black coffee</h3>
                <div class="btn ">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    
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
}

export default About;
