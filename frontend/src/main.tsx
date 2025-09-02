import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from '@material-tailwind/react'
import { APIProvider } from '@vis.gl/react-google-maps'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={['marker']}>
        <App />
      </APIProvider>
    </ThemeProvider>
  </StrictMode>,
)
