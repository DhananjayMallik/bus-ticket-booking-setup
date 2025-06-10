import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import Home from './pages/home/Home';
import Bus from './pages/bus/Bus';
import Detail from './pages/bus/Detail';
import Checkout from './pages/checkout/Checkout';
import About from './pages/about/About';
import Services from './pages/services/Services';
import AddBus from './pages/bus/AddBus'; // New component for adding buses
import Login from './pages/auth/Login'; // Import your Login component
import Register from './pages/auth/Register';
function App() {

  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>

      {/* Auth Routes */}
           <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

      <Route path='/bus' element={<Bus/>}/>
      <Route path='/bus/bus-details' element={<Detail/>}/>
      <Route path='/bus/bus-details/checkout' element={<Checkout/>}/>
       <Route path='/addbus' element={<AddBus/>}/>


    </Routes>
          {/* Footer */}
           <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App
