import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import LoginForm2 from './components/login-form-2';
import LoginForm from './components/login-form/login-form-1';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login-form-1" element={<LoginForm />} />
        <Route path="login-form-2" element={<LoginForm2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
