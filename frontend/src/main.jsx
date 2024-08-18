import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from '../src/styles/globalStyles'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < GlobalStyles />
    <App />
  </StrictMode>,
)
