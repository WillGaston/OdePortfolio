import './App.css'
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage'
import Header from './components/Header'
import ContactPage from './components/ContactPage'
import PortfolioPage from './components/ProjectsPage'
import { useState } from 'react'

function App() {
  const [currPage, setCurrPage] = useState("main");

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-between'>
        <Header setCurrPage={setCurrPage} currPage={currPage}/>
        <div className='flex-1 min-h-0'>
          <Routes>
            <Route path="/" element={<MainPage setCurrPage={setCurrPage}/>}/>
            <Route path="/portfolio" element={<PortfolioPage />}/>
            <Route path="/contact" element={<ContactPage />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
