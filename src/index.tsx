import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FloatingActionButton from './components/floatingActionButton';
import LoginForm2 from './components/login-form-2';
import LoginForm from './components/login-form/login-form-1';
import './styles.scss';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FloatingActionButton>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="login-form-2" element={<LoginForm2 />} />
        </Routes>
      </FloatingActionButton>
    </BrowserRouter>
  </React.StrictMode>
);
