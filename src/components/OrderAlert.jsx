/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/NavBar.css'

const OrderAlert = ({ selectedTable }) => {
  const [alertSent, setAlertSent] = useState(false);

  const handleSendAlert = () => {
    console.log("Enviando alerta para la mesa:", selectedTable);
    const message = `Hola, el cliente en la mesa ${selectedTable} está listo para hacer su pedido.`;

    const whatsappUrl = `https://wa.me/573225904819?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setAlertSent(true);
  };

  return (
    <div className="order-alert text-center mt-6">
      <button
        onClick={handleSendAlert}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2 btn btn-primary"
        disabled={!selectedTable || alertSent}
      >
        {alertSent ? 'Aviso Enviado' : 'Llamar al Mesero'}
      </button>
    </div>
  );
};

OrderAlert.propTypes = {
  selectedTable: PropTypes.string.isRequired,
};

export default OrderAlert;
