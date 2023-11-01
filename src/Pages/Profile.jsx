import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Config";
import Moment from "react-moment";


const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <div>Loading...</div>;
      }
    
      // التحقق من وجود خطأ
      if (error) {
        return <div>Error loading user data</div>;
      }
    
      // التحقق من وجود مستخدم
      if (!user) {
        return <div>User not found</div>;
      }
    
  return (
    
    <div style={{height:"580px"}}>
      <h2>Username: {user.displayName}</h2>
      <h3>Email:  {user.email} </h3>
      <h6>
            Last Sign-in :
            <Moment fromNow date={user.metadata.lastSignInTime} />{" "}
          </h6>
          <h6>
            Account Created :
            <Moment fromNow date={user.metadata.creationTime} />
          </h6>
          <button className="delete">Delete account</button>

    </div>
  )
}

export default Profile
