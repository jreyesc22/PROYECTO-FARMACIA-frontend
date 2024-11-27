// src/components/MedicamentosList.js
import React, { useEffect, useState } from 'react';
import { getAllMedicamentos } from '../services/apiService';
import './CSS/MedicamentosList.css'; // Importar el archivo CSS

function MedicamentosList() {
  const [medicamentos, setMedicamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicamentos = async () => {
      try {
        const result = await getAllMedicamentos();
        setMedicamentos(result); // Asigna los medicamentos obtenidos
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los medicamentos');
        setLoading(false);
      }
    };

    fetchMedicamentos();
  }, []);

  if (loading) {
    return <div className="loading">Cargando medicamentos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container">
      <h1>Lista de Medicamentos</h1>
      {medicamentos.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>Estatus Pago</th>
            </tr>
          </thead>
          <tbody>
            {medicamentos.map((med) => (
              <tr key={med.id}>
                <td>{med.id}</td>
                <td>{med.nombre}</td>
                <td>{med.precio}</td>
                <td>{med.descripcion}</td>
                <td>{med.fecha}</td>
                <td>{med.estatusPago}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-medicamentos">No se encontraron medicamentos.</div>
      )}
    </div>
  );
}

export default MedicamentosList;
