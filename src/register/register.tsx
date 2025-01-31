import React, { useState } from 'react';
import logo from '../assets/android-chrome-512x512.png';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate(); // For navigation after registration

  const handleRegister = async (): Promise<void> => {
    if (!username || !email || !password) {
      setMessage('Alle felt må fylles ut.'); // All fields must be filled
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful registration
        localStorage.setItem('user', JSON.stringify(data.data));
        console.log('Registrering vellykket, data:', data.data);

        // Navigate to the "Min side"
        navigate('/minside');
      } else {
        // Registration failed
        console.error('Feil under registrering:', data.error);
        setMessage(data.error || 'Noe gikk galt. Vennligst prøv igjen.');
      }
    } catch (err) {
      console.error('Uventet feil under registrering:', err);
      setMessage('Noe gikk galt. Vennligst prøv igjen.');
    }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        <label htmlFor="inpBrukernavn">Brukernavn</label>
      </div>

      <div className="form-floating mb-3">
        <input
          id="inpEmail"
          className="form-control rounded-pill"
          type="email"
          placeholder="E-post"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <label htmlFor="inpPassord">Passord</label>
      </div>

      <button
        className="btn btn-success btn-lg rounded-pill mt-3 mb-2 col-lg-3"
        onClick={handleRegister}
      >
        Registrer
      </button>

      {message && <div className="alert alert-info mt-3">{message}</div>}

      <div className="mb-4">
        Har du allerede bruker? <a href="/login" className="text-decoration-none">Logg inn</a>
      </div>
    </div>
  );
};

export default Register;
