import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import AppHeader from './components/layout/Header'
import Footer from './components/layout/Footer'
import routes from './routes'

// import PublicationDetail from './components/page/PublicationDetail';

const BASE_URL = import.meta.env.BASE_URL // Vite 환경 변수 사용

function App() {
  return (
    <Router basename={BASE_URL}>
      <div id="root">
        <AppHeader />
        <div className="main-content">
          <Routes>
            {routes.map(({ path, element }, key) => element && <Route key={key} path={path} element={element} />)}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  )
}

export default App
