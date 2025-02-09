/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const MenuItem = ({ name, description, price, image }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto bg-white transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-red-500 font-bold text-xl">${price.toFixed(3)}</p>
      </div>
    </div>
  );
};

export default MenuItem;
