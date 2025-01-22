import React, { useState } from 'react';
import './Register.css';
import '../index.css';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registrering:', { username, email, password });
  };

  return (
    <div className="register-container">
      <form className="register-form">
        <h1>Registrer ny bruker</h1>
        <input 
          type="text" 
          placeholder="Brukernavn" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="E-post" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Passord" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleRegister}>Opprett Bruker</button>
      </form>
    </div>
  );
};

export default Register;
