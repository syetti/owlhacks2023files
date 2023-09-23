// User.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

const User = () => {
  const { user, isAuthenticated } = useAuth0();


  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Logout />
      </div>
    )
  );
};

export default User;