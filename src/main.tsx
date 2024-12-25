import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({children: React.FC}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
