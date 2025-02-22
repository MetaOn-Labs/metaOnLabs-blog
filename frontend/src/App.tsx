import AppHeader from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/page/Dashboard';
import Team from './components/page/Team';
import Footer from './components/Footer';
import Publication from './components/page/Publication';
import PublicationDetail from './components/page/PublicationDetail';

const BASE_URL = import.meta.env.BASE_URL; // Vite 환경 변수 사용

function App() {
  return (
    <Router basename={BASE_URL}>
      <div id="root">
        <AppHeader />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path='/publication'>
              <Route index element={<Publication />} />
              <Route path=':id' element={<PublicationDetail />}/>
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  )
}

export default App
