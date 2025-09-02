import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import AppHeader from './components/layout/Header'
import Footer from './components/layout/Footer'
import routes from './routes'

// import PublicationDetail from './components/page/PublicationDetail';

// const BASE_URL = import.meta.env.BASE_URL // Vite 환경 변수 사용

function App() {
  return (
    <Router basename="/">
      <div id="root">
        <AppHeader />
        <div className="main-content">
          <Routes>
            {routes.map(({ path, element, items, name }, key) => {
              if (element && items.length == 0) {
                return <Route key={key} path={path} element={element} index={key === 0 ? true : false}/>
              } else {
                return (
                  <Route path={name.toLowerCase()} >
                    {items.map(({ path, element, name }, index) => (
                      <Route index={index === 0 ? true : false} key={name} path={path} element={element} />
                    ))}
                  </Route>
                )
              }
            })}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  )
}

export default App
