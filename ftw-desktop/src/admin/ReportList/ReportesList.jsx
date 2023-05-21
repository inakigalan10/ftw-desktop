import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getReportes } from './slice/thunks';
import ReportList from './ReportList';
import { UserContext } from '../../userContext';

const ReportesList = () => {
  const dispatch = useDispatch();
  const { reportes = [], isLoading } = useSelector((state) => state.reporte);

  const {authToken,setAuthToken,idUser,setIdUser,usernameUser, setUsernameUser} = useContext(UserContext);

  useEffect(() => {
    dispatch(getReportes(authToken))
  }, [])
  console.log(reportes)

  return (
    <>
    {isLoading ? (
        "Espera...."
      ) : (
        <>
          <div>
            <div className='header-admin'>
              <h1>LListat de Reportes</h1>
            </div>
            {reportes.length === 0 ? (
              <h1>No hay Reportes</h1>
            ) : (
              <div className='admin-user-list'>
                {reportes.map((v, i) => {
                  return (
                    <>
                      <ReportList key={v.id} v={v} />
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

export default ReportesList