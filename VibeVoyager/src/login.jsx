import { useState } from 'react';
import './Login.css';
import { auth } from './configuration';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="login-box">
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
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p className="signup-text">
          Don't have an account?{' '}
          <a href="#" className="signup-link">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;