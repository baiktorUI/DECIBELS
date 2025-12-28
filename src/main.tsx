import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DecibelApp from './DecibelApp.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DecibelApp />
  </StrictMode>
);
