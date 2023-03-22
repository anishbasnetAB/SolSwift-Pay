import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    // <nav>
       
    //   <ul>
    //     <li>
    //       <NavLink to="/">Home</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/payment">Payment</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/about">About</NavLink>
    //     </li>
    //   </ul>
    // </nav>
<nav className="navbar navbar-expand-lg navbar-dark bg-main">
  <div className="container-fluid m-x">
    
    <a className="navbar-brand" href="#">
      <img src="/public/sol.png" alt="logo" height={65} width={40} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarNav">

      <ul className="navbar-nav pl-5   text-link">
        <li className="nav-item px-3 ">
         <NavLink className="nav-link " to="/">Home</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink  className="nav-link"  to="/payment">Payment</NavLink>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" to="#">About</a>
        </li>
        <li className="nav-item px-3 me-auto">
          <a className="nav-link" href="#">Api</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



  );
};

export default Navbar;
