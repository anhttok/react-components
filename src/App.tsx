import React from 'react';
import LoginForm2 from './components/login-form-2';
import LoginForm from './components/login-form/login-form-1';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <LoginForm />
      <LoginForm2 />
    </div>
  );
}

export default App;
