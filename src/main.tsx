import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  
    //Fjernet StrictMode siden det skjedde double renders og bugs skjedde.
    //Hvet ikke om vi faktisk trenger det
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);