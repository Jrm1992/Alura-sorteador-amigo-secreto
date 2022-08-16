import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './componentes/Formulario/Formulario';
import { PaginaBase } from './componentes/PaginaBase/PaginaBase';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Formulario />} />
          <Route path='/a' element={<PaginaBase />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
