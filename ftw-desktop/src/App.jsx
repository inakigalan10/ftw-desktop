import { About } from './About';
import './App.css';
import { Contacte } from './Contacte ';
import LandingPage from './landingPage/LandingPage';
import { Routes, Route } from "react-router-dom";
import Register from './auth/Register';
import { Login } from './auth/Login';
import Matching from './matching/Matching';
import Menu from './layaout/Menu';
import Profile from './Profile/Profile';
import Matches from './Matches/Matches';
import Notification from './Notification/Notification';
import Message from './Message/Message';
import ProfileFotos from './Profile/ProfileFotos';
function App() {

  return (
    <>
    <Routes>
            <Route path="/" element={
                          <>
                            <Menu/>
                            <Matching/>
                          </>
                        } /> 
            <Route path="/welcome" element={
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
        <Route path="/profile" element={
            <>
              <Menu/>
              <Profile/>
              
            </>
        } />
        <Route path="/profileFotos" element={
            <>
              <Menu/>
              <Profile/>
              <ProfileFotos/>              
            </>
        } />     
        <Route path="/matches" element={
            <>
              <Menu/>
              <Matches/>
            </>
        } /> 
        <Route path="/notification" element={
            <>
              <Menu/>
              <Notification/>
            </>
        } /> 
        <Route path="/message" element={
            <>
              <Menu/>
              <Message/>
            </>
        } />       

      </Routes>
    </>
  )
}

export default App
