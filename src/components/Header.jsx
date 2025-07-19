import React from 'react';

const Header = () => (
  <div className='header bg-gray-100 text-gray-500'>
    <div className="container flex">
      <h1 className='logo'>
        <img
          src="./src/assets/logo.webp"
          alt="Imagem Responsiva"
          className="w-full h-auto"
        />
      </h1>
      <span>|</span>
      <span>Tech Challenger</span>
    </div>
  </div>
);

export default Header;
