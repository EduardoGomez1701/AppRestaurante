import { useState } from 'react'

import './App.css'
import Menu from './components/Menu'
import TableSelector from './components/TableSelector '
import OrderAlert from './components/OrderAlert'

  const menuItem = [
    { name: 'TORTA', description: 'UNICO POSTRE CON SABORES DE: MARACUYA,MORA,FRESA,FRUTOS ROJOS', price: 11.000, image: 'public/img/CHESSECAKE.jpg' },
    { name: 'PANECOOK', description: 'DELISIOSO PANECOOK CON MEZCLA DE POLLO, CHAMPIÑOSE, QUESO GRATINADO Y SALSA DE LA CASA.', price: 19.000, image: 'public/img/PANECOOK.jpg' },
    // Añade más platos aquí
  ];

  const App = () => {
    // Definir el estado para la mesa seleccionada
    const [selectedTable, setSelectedTable] = useState('');
  
    // Función para manejar la selección de mesa
    const handleTableSelect = (tableNumber) => {
      setSelectedTable(tableNumber);
    };
  
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Menú del Restaurante</h1>
      <TableSelector totalTables={9} onSelectTable={handleTableSelect} />
      <Menu items={menuItem} />
      {selectedTable && <p className='text-center mt-4 text-lg'>Mesa Seleccionada: {selectedTable}</p>}
      <OrderAlert selectedTable={selectedTable} />
    </div>
    );
  };

export default App
