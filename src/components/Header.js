import React from "react";
import { Link } from "react-router-dom";
import SearchProduct from "./SearchProduct";
import { ProductContext } from "./Context/Context";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://www.achieversit.com/assets/images/logo-white.png"
              className="img-fluid"
            />
          </a>
         
            <ProductContext.Consumer>
              {(value) => {console.log(value)}}
            </ProductContext.Consumer>
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <Link to="/cart" class="nav-link">
                  Cart
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/aboutus" class="nav-link">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
           <SearchProduct />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
