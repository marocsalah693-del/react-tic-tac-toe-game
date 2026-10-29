import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tic_tac_toe from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tic_tac_toe />
  </StrictMode>,
)
