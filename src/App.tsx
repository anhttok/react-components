import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
function App() {
  return (
    <div className="app">
      <ol className="prefixed styled">
        <li>
          ​<Link to="login-form-1">Login Form 1</Link>
        </li>
        <li>
          <Link to="login-form-2">Login Form 2</Link>
        </li>
      </ol>
    </div>
  );
}

export default App;
