import React from 'react';
import MedicamentosList from './Componentes/ListaMedicamentos.js'; 
import AgregarMedicamento from './Componentes/AgregarMedicamento.js';

function App() {
  return (
    <div className="app">
    

      <div className="content">
        <div className="cuadro-medicamento">
          <h1>Agregar Nuevo Medicamento</h1>
          <AgregarMedicamento />
        </div>

        <div className="cuadro-gestion">
          <h2>Gestión de Medicamentos</h2>
          <MedicamentosList />
        </div>
      </div>
    </div>
  );
}

export default App;
