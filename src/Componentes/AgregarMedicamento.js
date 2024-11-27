// src/components/AgregarMedicamento.js
import React, { useState } from 'react';
import { createMedicamento } from '../services/apiService'; // Importa la función desde apiService.js
import './CSS/AgregarMedicamento.css';  // Puedes crear un archivo CSS para este componente

function AgregarMedicamento() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaCorta, setFechaCorta] = useState('');
  const [statuspago, setStatuspago] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Datos del medicamento
    const medicamento = {
      nombre,
      precio,
      descripcion,
      fechaCorta,
      statuspago,
    };

    try {
      // Llamamos a la función de apiService para crear el medicamento
      const response = await createMedicamento(medicamento);
      setMensaje(`Medicamento creado con éxito! ID: ${response.medicamento.id}`);
      setLoading(false);

      // Limpiar el formulario
      setNombre('');
      setPrecio('');
      setDescripcion('');
      setFechaCorta('');
      setStatuspago('');
    } catch (error) {
      setMensaje('Error al crear el medicamento.');
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Agregar Medicamento</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Fecha (yyyy-mm-dd):</label>
          <input
            type="date"
            value={fechaCorta}
            onChange={(e) => setFechaCorta(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Estatus de pago:</label>
          <select
            value={statuspago}
            onChange={(e) => setStatuspago(e.target.value)}
            required
          >
            <option value="">Seleccionar...</option>
            <option value="Pagado">Pagado</option>
            <option value="Pendiente">Pendiente</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creando...' : 'Crear Medicamento'}
        </button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default AgregarMedicamento;
