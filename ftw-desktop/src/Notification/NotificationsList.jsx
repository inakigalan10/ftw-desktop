import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { NotificationList } from './NotificationList';
import { getNotifications } from './slice/thunks';
import { UserContext } from '../userContext';





export const NotificationsList = () => {
  const dispatch = useDispatch();
  const {matchs = [], isLoading} = useSelector((state) => state.match);
  let { authToken, setAuthToken, id, setId } = useContext(UserContext);

  // només quan la vble d'estat refresca canvia el seu valor
  // refresca canviarà el valor quan fem alguna operació com delete
  useEffect(() => {
    dispatch(getNotifications(authToken))
  }, [])
  return (
    <>
     {isLoading ? (
        "Espera...."
      ) : (
      <>
        <div>
          <div className='header'>
            <h1>Listado de Notificaciones</h1>
          </div>
          <div >
              {matchs.map((v, i) => {
                    return (
                      <>
                        {( <NotificationList key={v.id} v={v}/>)} 
                      </>
                    )
                })}
          </div>
        </div>
        
      </>
      )}
    </>
  );
};
