import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './configuration';


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      navigate("/login");
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('This email is already registered');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters');
          break;
        default:
          setError('An error occurred during registration');
      }
      console.error(error.code, error.message);
    }
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


export default Register;