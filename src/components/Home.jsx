import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <button>
        <Link to="/about">Go to About page</Link>
      </button>
    </div>
  );
};

export default Home;
