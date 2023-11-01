import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Config";

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);

  return (
    <div style={{height:"580px"}}>
      <h2>Username: {user.displayName}</h2>
      <h3>Email:  {user.email} </h3>
      {/* <h6>
            Last Sign-in :{" "}
            <Moment fromNow date={user.metadata.lastSignInTime} />{" "}
          </h6>
          <h6>
            Account Created :{" "}
            <Moment fromNow date={user.metadata.creationTime} />
          </h6>
          <button className="delete">Delete account</button> */}

    </div>
  )
}

export default Profile
