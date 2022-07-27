import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/login';
import Administrador from './pages/administrador';
import Motorista from './pages/motorista';
import NotFound from './pages/not_found';

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='adm' element={<Administrador />} />
        <Route path='mot' element={<Motorista />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;