/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TableSelector = ({ totalTables, onSelectTable }) => {
  const [selectedTable, setSelectedTable] = useState('');

  const handleChange = (event) => {
    const tableNumber = event.target.value;
    setSelectedTable(tableNumber);
    onSelectTable(tableNumber); // Llamada a la función pasada como prop
  };

  return (
    <div className="table-selector mb-6">
      <label htmlFor="table" className="block text-lg font-medium text-gray-700 mb-2">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Selecciona tu mesa</h3>
      </label>
      <select
        id="table"
        value={selectedTable}
        onChange={handleChange}
        className="block w-full mt-1 p-2 bg-whie border border-gray-300 rounded-md shadow-sm focus: outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="" disabled>Elige una mesa</option>
        {Array.from({ length: totalTables }, (_, index) => (
          <option key={index} value={index + 1}>Mesa {index + 1}</option>
        ))}
      </select>
    </div>
  );
};

TableSelector.propTypes = {
  totalTables: PropTypes.number.isRequired,
  onSelectTable: PropTypes.func.isRequired,
};

export default TableSelector;
