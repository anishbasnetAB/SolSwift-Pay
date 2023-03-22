import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
<div className='bg-main d-flex flex-column flex-md-row justify-content-between w-100' style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  }}>
  <div className='left m-top m-x p-left'>
    <h1 className='text-big'>SolSwift Pay</h1>
    <h1>Simplify your Solona Payment</h1>
    <button className='btn btn-primary my-4'>
      <Link to="/payment" className='text-white  text-btn'>Send Token</Link>
    </button>
  </div>
  <div className='right order-md-last m-x'>
    <img src="/vault.png" className='img-fluid img-home'  alt="" />
  </div>
</div>


  );
};

export default Home;
