/* eslint-disable no-unused-vars */
import React from 'react';
import Menu from '../components/Menu';

  const menuItem = [
    { name: 'CHESSECAKE', description: 'UNICO POSTRE CON SABORES DE: MARACUYA,MORA,FRESA,FRUTOS ROJOS', price: 11.000, image: '/CHESSECAKE.jpg' },
    { name: 'PANECOOK', description: 'DELISIOSO PANECOOK CON MEZCLA DE POLLO, CHAMPIÑOSE, QUESO GRATINADO Y SALSA DE LA CASA.', price: 19.000, image: '/PANECOOK.jpg' },
    // Añade más platos aquí
  ];


const MenuPage = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Menú del Restaurante</h1>
      <Menu items={menuItem} />
    </div>
  );
};

export default MenuPage;
