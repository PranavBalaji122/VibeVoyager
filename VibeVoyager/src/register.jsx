import { useState } from 'react';
import './register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="container">
      <div className="register-box">
        <h1 className="title">Vibe Voyager</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p className="login-text">
          Already have an account?{' '}
          <a href="#" className="login-link">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;