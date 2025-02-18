// eslint-disable-next-line no-unused-vars
import React,{ useState } from 'react'

import './App.css'
import TableSelector from './components/TableSelector '
import OrderAlert from './components/OrderAlert'

import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import MenuPage from './pages/MenuPage'


const App = () => {
    // Definir el estado para la mesa seleccionada
    const [selectedTable, setSelectedTable] = useState('');
  
    // Función para manejar la selección de mesa
    const handleTableSelect = (tableNumber) => {
      setSelectedTable(tableNumber);
    };
  
    return (
      <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Bienvenido al Restaurante</h1>
      <TableSelector totalTables={9} onSelectTable={handleTableSelect} />
      {selectedTable && <p className="text-center mt-4 text-xl font-semibold text-gray-700">Mesa seleccionada: {selectedTable}</p>}
      <OrderAlert selectedTable={selectedTable} /> 

      <NavBar/> 
      <Routes>
        <Route path='/menu' element={<MenuPage/>}/>
      </Routes>
      
    </div>
    );
  };

export default App
