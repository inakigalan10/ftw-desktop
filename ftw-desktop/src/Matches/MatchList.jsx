import React, { useState, useContext } from 'react';
import { UserContext } from "../userContext";
import { Link } from 'react-router-dom';
import { FaRegPaperPlane } from 'react-icons/fa';

export const MatchList = ({v}) => {
  const { authToken,setAuthToken,idUser,setIdUser,usernameUser, setUsernameUser } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false); // Estado para mostrar/ocultar el menú
  let [refresca, setRefresca] = useState(false);

  const deleteMatch = (id, e) => {
    e.preventDefault();

    let confirma = confirm("Estas  segur?");

    if (confirma) {
      fetch("http://127.0.0.1:8000/match-delete/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Token " + authToken,
        },
        method: "DELETE",
      })
        .then((data) => data.json())
        .then((resposta) => {
          console.log(resposta);
          if (resposta.success == true) {
            console.log("OK");
            // provoca el refrescat del component i la reexecució de useEffect
            setRefresca(true);
          }
        });
    }
  };


  return (
    <>
      <div className='card-match' key={v.id}>
        {v.user1_data.user_id === idUser ? (
           
            <div className='match'>
              <Link to={"/profile/" + v.user2_data.user_id}>
              <div className='match'>
                <div className='foto-match'>
                  <img src="./public/img/img-user.jpg" alt="" />
                </div>
                <div className='username-match'>
                  <h1>{v.user2_data.username}</h1>
                </div>
              </div>
              </Link>
              <div className='action-match' >
              <Link to={"/chat/" + v.chat_id}>
                <div className='message-match'>
                  <FaRegPaperPlane/>
                </div>
              </Link>
                <div
                  className='more-action-match'
                  onClick={() => setShowMenu(!showMenu)} // Cambia el estado del menú al hacer clic
                >
                  ...
                </div>
                {showMenu && ( // Muestra el menú si el estado es verdadero
                  <div className='menu-match'>
                    <div className='menu-option-match delete-match' onClick={(e) => deleteMatch(v.match_id, e)}>Delete</div>
                    <div className='menu-option-match report-match'>Report</div>
                  </div>
                )}
              </div>
            </div>
          
        ) : (
          <div className='match'>
              <Link to={"/profile/" + v.user1_data.user_id}>
              <div className='match'>
                <div className='foto-match'>
                  <img src="./public/img/img-user.jpg" alt="" />
                </div>
                <div className='username-match'>
                  <h1>{v.user1_data.username}</h1>
                </div>
              </div>
              </Link>
              <div className='action-match' >
              <Link to={"/chat/" + v.chat_id}>
                <div className='message-match'>
                  <FaRegPaperPlane/>
                </div>
              </Link>
                <div
                  className='more-action-match'
                  onClick={() => setShowMenu(!showMenu)} // Cambia el estado del menú al hacer clic
                >
                  ...
                </div>
                {showMenu && ( // Muestra el menú si el estado es verdadero
                  <div className='menu-match'>
                    <div className='menu-option-match delete-match' onClick={(e) => deleteMatch(id, e)}>Delete</div>
                    <div className='menu-option-match report-match'>Report</div>
                  </div>
                )}
              </div>
            </div>
        )}
      </div>
    </>
  );
};
