import { About } from './About';
import { useEffect, useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';

import './App.css';
import { Contacte } from './Contacte ';
import Matching from './matching/Matching';
import Menu from './layaout/Menu';
import { UserContext } from './userContext'
import { LoginRegister } from './auth/LoginRegister';
import { Profile } from './Profile/Profile';
import { MatchsList } from './Matches/MatchsList';
import CreateProfile  from './Profile/CreateProfile/CreateProfile';

import Chat from './chat/Chat';
import ProfileUpdate from './Profile/ProfileUpdate';
import useSocket from './hooks/useSocket';
import useSocketNotis from './hooks/useSocketNotis';



function App() {

  let [authToken,setAuthToken] = useState("");
  let [idUser,setIdUser]= useState("");
  let [username,setUsername]= useState("")
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }

    const username = localStorage.getItem('username');
    if (username) {
      setUsername(username);
    }

    const id = localStorage.getItem('idUsername');
    if (id) {
      setIdUser(id);
    }
  }, []);

  // Utilizar el hook useSocket para establecer la conexión WebSocket después de iniciar sesión
  useEffect(() => {
    if (authToken && idUser) {
      const socket = useSocketNotis(authToken, idUser);
      // Resto de la lógica de manejo del socket...
    }
  }, [authToken, idUser]);
  

  return (
    <>
        <UserContext.Provider value= {{authToken,setAuthToken,idUser,setIdUser,username,setUsername}}>
        
       
        {authToken ? (
          <>
           <Routes>
            <Route path="/" element={
              <>
                <Menu />
                <Matching />
              </>
            } />
            
            <Route path="/about" element={<About />} />
            
            <Route path="/contacte" element={<Contacte />} />
            
            
            <Route path="/profile/:id" element={
              <>
                <Menu />
                <Profile/>
              </>
            } />
            <Route path="/profile/edit/:id" element={
              <>
                <Menu />
                <ProfileUpdate/>
              </>
            } />
            
            
            <Route path="/matches" element={
              <>
                <Menu />
                <MatchsList />
              </>
            } />
            
            
            
            <Route path="/chat/:id" element={
              <>
                <Menu />
                <Chat />
              </>
            } />

            <Route path="/createProfile" element={
              <>
               
                <CreateProfile />
              </>
            } />
            </Routes>



           
          </>
        ) : (
          <LoginRegister />
        )}
      </UserContext.Provider>

    </>
  )
}

export default App;