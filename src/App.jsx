import './App.css'
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage'
import Header from './components/Header'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-between'>
        <Header />
        <div className='flex-1 min-h-0'>
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/projects" element={<ProjectsPage />}/>
            <Route path="/contact" element={<ContactPage />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
