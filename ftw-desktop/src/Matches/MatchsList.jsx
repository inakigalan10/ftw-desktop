import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { UserContext } from "../userContext";
import { MatchList } from './MatchList';
import { getMatchs } from './slice/thunks';
import './matches.css'

export const MatchsList = () => {
  const dispatch = useDispatch();
  const {matchs = [], isLoading} = useSelector((state) => state.match);
  let { authToken, setAuthToken } = useContext(UserContext);

  // només quan la vble d'estat refresca canvia el seu valor
  // refresca canviarà el valor quan fem alguna operació com delete
  useEffect(() => {
    dispatch(getMatchs(authToken))
  }, [])
  return (
    <>
      {isLoading ? (
        "Espera...."
      ) : (
        <>
          <div>
            <div className='header-match'>
              <h1>LListat de matchs</h1>
            </div>
            {matchs.length === 0 ? (
              <h1>No tienes matches</h1>
            ) : (
              <div className='cards-match'>
                {matchs.map((v, i) => {
                  return (
                    <>
                      <MatchList key={v.id} v={v} />
                    </>
                  )
                })}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
