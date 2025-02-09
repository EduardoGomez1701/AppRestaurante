/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div className="menu grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <MenuItem
          key={index}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Menu;
