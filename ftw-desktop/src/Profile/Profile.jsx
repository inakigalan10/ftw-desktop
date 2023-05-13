import React, { useState } from 'react';
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from './CreateProfile/slice/thunks';
import { UserContext } from "../userContext";

import './Profile.css';

export const Profile = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
 
  const { pathname } = useLocation();
  let {authToken, setAuthToken } = useContext(UserContext);
  useEffect(() => {
    dispatch(getProfile(authToken,name))
  }, []);

  const {profile, isLoading, error,info} = useSelector(state => state.profile)
  console.log(profile)
  return (
    <>
     
        <>
          <div className="page-container"> 
            <div className='header_profile'>
                <div className='name_profile'>
                <h1 className="user_name_profile">{profile.user.username}</h1>
                </div>

            </div>
            <div className='info_perfil'>
                <div className='info'>
                  <h2 className="description">{profile.description}</h2>
                </div>
                <div className='info'>
                  <h2 className="player_type">{profile.genres}</h2>
                </div>
                <div className='info'>
                  <h2 className="play_schedule">{profile.languages}</h2>
                </div>
                <div className='info'>
                  <h2 className="genres">{profile.play_schedule}</h2>
                </div>
                <div className='info'>
                  <h2 className="languages">{profile.player_type}</h2>
                </div>
                <div className='info'>
                  <h2 className="country">{profile.country}</h2>
                </div>

            </div>
          </div>

        </>
      
    </>
  );
};
