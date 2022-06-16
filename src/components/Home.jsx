import React from 'react';
import Products from './Products';

const Home = () => {
  return <div className='hero'>
    <div className="card bg-dark text-white border-0">
      <img src="/assets/bg.jpg" className="card-img" alt="Background"
       />
      <div className="card-img-overlay d-flex flex-column">
        <div className="container">


    
        <h4 className="card-title display-5 fw-bolder mb-0">NEW SEASON ARRIVALS</h4>
        <p className="card-text lead fs-3 ">
          CHECK OUT ALL THE TRENDS
          </p>
          </div>
      </div>
    </div>
  <Products />
  </div>;
};

export default Home;
