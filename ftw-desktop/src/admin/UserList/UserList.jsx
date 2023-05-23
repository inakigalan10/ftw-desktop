import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../userContext';
import '../admin.css'
import { RiDeleteBinLine } from 'react-icons/ri';


const UserList = ({ v }) => {
  const { authToken, setAuthToken, idUser, setIdUser, usernameUser, setUsernameUser } = useContext(UserContext);
  let [refresca, setRefresca] = useState(false);

  const deleteUser = (id, e) => {
    e.preventDefault();

    let confirma = confirm("Estas  segur?");

    if (confirma) {
      fetch("http://equip10.insjoaquimmir.cat/delete-user/" + id, {
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
    <div className="admin-user-list-item" key={v.id}>
      <Link to={"/profile/" + v.id}>
        <div className="admin-user-list-item-container">
          <div className="admin-user-list-item-image">
            <img src="../public/img/img-user.jpg" alt="" />
          </div>
          <div className="admin-user-list-item-info">
            <div>
              <h2 className="admin-user-list-item-id">{v.id}</h2>
            </div>
            <div>
              <h2 className="admin-user-list-item-username">{v.username}</h2>
            </div>
            <div>
              <h2 className="admin-user-list-item-email">{v.email}</h2>
            </div>
            <div className='admin-action'>
              <div className='admin-action-delete' onClick={(e) => deleteUser(v.id, e)}>
                <RiDeleteBinLine />
                <span className='admin-delete-label'>Eliminar</span>
              </div>
            </div>            
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserList;
