import React, { useContext } from 'react';
import { UserContext } from "../userContext";
import { Link } from 'react-router-dom'

export const MatchList = ({v}) => {
  let { authToken, setAuthToken, id, setId } = useContext(UserContext)

  console.log(v)


  return (
    <>
      <div key={v.id}>
        {v.user1_data.user_id === id ? (
          <Link to={"/profile/" + v.user2_data.user_id}>
            <div>
              <div></div>
              <div className='username'>
                <h1>{v.user2_data.username}</h1>
              </div>
            </div>
          </Link>
        ) : (
          <Link to={"/profile/" + v.user1_data.user_id}>
            <div>
              <div></div>
              <div className='username'>
                <h1>{v.user1_data.username}</h1>
              </div>
            </div>
          </Link>
        )}
      </div>
    </>
  );
};
