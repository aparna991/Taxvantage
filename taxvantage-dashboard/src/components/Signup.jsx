import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup logic (replace with actual API call)
    if (email && password) {
      alert('Signup successful! Please login.');
      navigate('/login');
    } else {
      setError('Please enter email and password');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Signup</h2>
        {error && <div className="auth-error">{error}</div>}
        <form className="auth-form" onSubmit={handleSignup}>
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
          <button type="submit">Signup</button>
        </form>
        <div className="auth-switch">
          Already have an account? <a href="/login">Login</a>
        </div>
        <div className="auth-home-button">
          <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;