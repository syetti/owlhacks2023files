import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./User.css";

const User = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="user-container">
        <div className="header">
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <p>Contribute to the community</p>
        <Link to="https://www.refugerestrooms.org/restrooms/new">
          <Button variant='outline-primary'>Share a new restroom</Button>
        </Link>
        <div className="logout">
          <Logout />
        </div>
      </div>
    )
  );
};

export default User;
