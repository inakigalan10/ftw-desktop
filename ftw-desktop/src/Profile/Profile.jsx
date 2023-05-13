import React, { useState } from 'react';

import './Profile.css';

import { useDispatch, useSelector } from "react-redux";
import { getProfile } from './CreateProfile/slice/thunks';





const Profile = () => {
  const { id } = useParams();
  const {profile, isLoading, error,info} = useSelector(state => state.profiles)
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  let { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext);
  useEffect(() => {
    dispatch(getProfile(authToken,id))
   
  }, []);


  return (
  //  <>
  //   {/* Només es renderitza quan isLoading es false */}
  //   {isLoading ? (
  //         "Espera...."
  //       ) : (
  //         <div className="page-container"> 
  //           <div className='header_profile'>
  //             <div className='img_profile'>
  //               <img src="./img/img-user.jpg" alt="User avatar" />
  //             </div>
  //             <div className='info_perfil'>
  //               <div className='name_profile'>
  //                 <h1 className="user_name_profile">John Doe</h1>
  //               </div>
  //               <div className='username_profile'>
  //                 <p className="user_email_profile">@fhkdsjdj</p>
  //             </div>
  //             </div>
  //           <div className='acciones_profile'>
  //                 <div className='edit_perfile' onClick={editProfileClick}>
  //                     <BsFillPencilFill/>
  //                 </div>

  //           </div>
  //         </div>

  //       )}
  //  </>
    
  )
}

export default Profile
