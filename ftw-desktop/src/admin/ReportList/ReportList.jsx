import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../userContext';
import { getUser } from '../../Profile/slice/user/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBinLine } from 'react-icons/ri';


const ReportList = ({ v }) => {
  const dispatch = useDispatch();

  const { authToken, setAuthToken, idUser, setIdUser, usernameUser, setUsernameUser } = useContext(UserContext);
  const [showPopup, setShowPopup] = useState(false);
  const [blurBackground, setBlurBackground] = useState(false);
  const {user, isLoading} = useSelector((state) => state.user);
  let [refresca, setRefresca] = useState(false);

  const deleteReport = (id, e) => {
    e.preventDefault();

    let confirma = confirm("Estas  segur?");

    if (confirma) {
      fetch("http://equip10.insjoaquimmir.cat/admin/report-delete/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Token " + authToken,
        },
        method: "DELETE",
      })
        setRefresca(true);
        alert("borrado correctamente ");
        
    }
  };
  const handleOpenPopup = () => {
    setShowPopup(true);
    setBlurBackground(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setBlurBackground(false);
  };


  useEffect(() => {
    dispatch(getUser(authToken, v.reported_user))
  }, [])
  
  return (
    <div className="admin-user-list-item" key={v.id}>
      <div className="admin-user-list-item-container">
        <div className="admin-user-list-item-info" onClick={handleOpenPopup}>
          <div>
            <h2 className="admin-user-list-item-id">{v.id}</h2>
          </div>
          <div>
            <h2 className="admin-user-list-item-username">{v.subject}</h2>
          </div>
          
        </div>
        <div className='admin-action'>
              <div className='admin-action-delete' onClick={(e) => deleteReport(v.id, e)}>
                <RiDeleteBinLine />
                <span className='admin-delete-label'>Eliminar</span>
              </div>
          </div>
      </div>
      {showPopup && (
        <div className={`popup ${blurBackground ? 'blur' : ''}`}>
          <h2>User: {user.username} </h2>
          
          <h2>Motivo: {v.subject}</h2>
          <h2>Descripcion: {v.description}</h2>
          <button onClick={handleClosePopup}>Cerrar</button>

        </div>
      )}
    </div>
  );
}

export default ReportList;
