import React from 'react';
import headerCar from 'images/headerCar1.jpg';

const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img src={headerCar} alt="car" />
      <div
        style={{
          position: 'absolute',
          top: 120,
          left: 70,
          width: 350,
        }}
      >
        <h1
          style={{
            fontWeight: 600,
            fontSize: 56,
            color: 'rgb(53, 114, 247)',
            textShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)',
          }}
        >
          Find your Dream Car
        </h1>
      </div>
    </div>
  );
};

export default Home;
