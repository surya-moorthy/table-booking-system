import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Container } from './components/container.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container>
         <App />
    </Container>
  </StrictMode>,
)
