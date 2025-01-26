import React, { useState } from 'react';
import logo from '../assets/android-chrome-512x512.png';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registrering:', { username, email, password });
  };

  return (
    <div
      id="wrapper"
      className="container col-md-5 d-flex flex-column justify-content-around align-items-center border border-success
                 bg-light rounded p-5 mt-5"
    >
      <img src={logo} className="img w-25" alt="logo" />

      <div className="container text-center" style={{ color: '#000' }}>
        <p className="display-6 mb-0 fs-2 fw-normal">Registrer deg</p>
        <p className="display-12">It's TeeTime</p>
      </div>

      <div className="form-floating mb-3">
        <input
          id="inpBrukernavn"
          className="form-control rounded-pill"
          type="text"
          placeholder="Brukernavn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="inpBrukernavn" style={{ padding: 'calc(var(bs-gutter-x)* .5)' }}>
          Brukernavn
        </label>
      </div>

      <div className="form-floating mb-3">
        <input
          id="inpEmail"
          className="form-control rounded-pill"
          type="email"
          placeholder="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="inpEmail">E-post</label>
      </div>

      <div className="form-floating mb-1">
        <input
          id="inpPassord"
          className="form-control rounded-pill"
          type="password"
          placeholder="Passord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="inpPassord">Passord</label>
      </div>

      <button
        className="btn btn-success btn-lg rounded-pill mt-3 mb-2 col-lg-3"
        onClick={handleRegister}
      >
        Registrer
      </button>

      <div className="mb-4">
        Har du allerede bruker? <a href="/" className="text-decoration-none">Logg inn</a>
      </div>
    </div>
  );
};

export default Register;
