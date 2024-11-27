// src/services/apiService.js
import axios from 'axios';

// Configura la URL base de tu API
const API_URL = 'https://api-examen-rec.onrender.com/api/medicamentos/';

// Instancia de Axios con configuración base
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para obtener todos los medicamentos
export const getAllMedicamentos = async () => {
    try {
      const response = await api.get('/all');
      
      // Extraemos los medicamentos de la propiedad "medicamentos"
      const medicamentos = response.data.medicamentos;
  
      // Verifica si la propiedad "medicamentos" es un array
      if (Array.isArray(medicamentos)) {
        return medicamentos;
      } else {
        throw new Error('La propiedad "medicamentos" no es un array');
      }
    } catch (error) {
      console.error('Error al obtener los medicamentos:', error);
      throw error; // Lanza el error para manejarlo en el componente
    }
  };

// Función para actualizar un medicamento por ID
export const updateMedicamento = async (id, medicamento) => {
  try {
    const response = await api.put(`/update:${id}`, medicamento);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para eliminar un medicamento por ID
export const deleteMedicamento = async (id) => {
  try {
    const response = await api.delete(`/delete:${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


//funcion para agregar un medicamento
export const createMedicamento = async (medicamento) => {
    try {
      const response = await api.post('/create', medicamento);
      return response.data;
    } catch (error) {
      console.error('Error al crear medicamento:', error);
      throw error;
    }
  };