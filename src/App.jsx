import './App.css'
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage'
import Header from './components/Header'
import ContactPage from './components/ContactPage'
import PortfolioPage from './components/PortfolioPage'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [currPage, setCurrPage] = useState("main");

  useEffect(() => {
    const path = location.pathname.slice(1);
    setCurrPage(path || 'main');
  }, [location.pathname]);

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-between'>
        <Header setCurrPage={setCurrPage} currPage={currPage}/>
        <div className='flex-1 min-h-0'>
          <Routes>
            <Route 
              path="/" 
              element={
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="h-full"
                >
                  <MainPage setCurrPage={setCurrPage}/>
                </motion.div>
              }
            />
            <Route 
              path="/portfolio" 
              element={
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="h-full"
                >
                  <PortfolioPage />
                </motion.div>
              }
            />
            <Route 
              path="/contact" 
              element={
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="h-full"
                >
                  <ContactPage />
                </motion.div>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
