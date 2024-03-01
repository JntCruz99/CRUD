import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Cadastro from './routes/Cadastro';
import Usuarios from './routes/Usuarios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App