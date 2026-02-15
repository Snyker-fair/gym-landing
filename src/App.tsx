import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage'; // Asumiendo que ya creaste este archivo

const App: React.FC = () => {
  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      
      {/* Ruta por defecto (Error 404) */}
      <Route path="*" element={
        <div className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
          <h1 className="fw-bold">404 - Página no encontrada</h1>
        </div>
      } />
    </Routes>
  );
};

export default App;