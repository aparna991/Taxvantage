import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic (replace with actual API call)
    if (email && password) {
      // Set authentication status
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);

      // Redirect to the previous page or dashboard
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    } else {
      setError('Please enter email and password');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>
        {error && <div className="auth-error">{error}</div>}
        <form className="auth-form" onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="auth-switch">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
        <div className="auth-home-button">
          <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default Login;