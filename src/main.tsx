import Aos from 'aos';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

Aos.init();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
