import { About } from './About';
import './App.css';
import { Contacte } from './Contacte ';
import LandingPage from './landingPage/LandingPage';
import { Routes, Route } from "react-router-dom";
import Register from './auth/Register';
import { Login } from './auth/Login';


function App() {

  return (
    <>
    <Routes>
            <Route path="/" element={
                  <>
                    <LandingPage />
                  </>
                } />  
            <Route path="/about" element={
              <>
                <About/>
              </>
          } />   

          <Route path="/contacte" element={
            <>
              <Contacte/>
            </>
        } />  
        <Route path="/register" element={
            <>
              <Register/>
            </>
        } />  
         <Route path="/login" element={
            <>
              <Login/>
            </>
        } />       

      </Routes>
    </>
  )
}

export default App
