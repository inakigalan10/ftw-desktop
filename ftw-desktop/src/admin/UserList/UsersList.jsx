import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../slice/thunks';
import { UserContext } from '../../userContext';
import UserList from './UserList';
import AdminMenu from '../AdminMenu';

const UsersList = () => {
  const dispatch = useDispatch();
  const {users = [], isLoading} = useSelector((state) => state.user);
  const {authToken,setAuthToken,idUser,setIdUser,usernameUser, setUsernameUser} = useContext(UserContext);
  
  useEffect(() => {
    dispatch(getUsers(authToken))
  }, [])

  return (
    <>
    {isLoading ? (
        "Espera...."
      ) : (
        <>
          <div>
            <div className='header-admin'>
              <h1>LListat de Users</h1>
            </div>
            {users.length === 0 ? (
              <h1>No hay Users</h1>
            ) : (
              <div className='admin-user-list'>
                {users.map((v, i) => {
                  return (
                    <>
                      <UserList key={v.id} v={v} />
                    </>
                  )
                })}
              </div>
            )}
          </div>
        </>
      )}</>
  )
}

export default UsersList