import React from "react";
import "./css/Home.css"
import Products from "./Products";
import Footer from "./Footer";




const Home = () => {
  return (
    <div className="hero">
      <div className="card text-light border-0 ">
      <img src="assets/images/bg.jpg" className="card-img container my-5" alt="background" height="550" />
 <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container">
        <h5 className="card-title display-4 fw-bolder mb-0 px-5">New Season Arrival</h5>
          <p className="card-text lead fs-2 px-5">
             Check out all trends
          </p>
          
        </div>
        </div>
      </div>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
