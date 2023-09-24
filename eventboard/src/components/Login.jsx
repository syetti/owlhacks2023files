// Login.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() => loginWithRedirect()}
      style={{
        background: 'linear-gradient(to left, #553c9a, #b393d3)',
        color: 'white',
      }}
    >
      Log In
    </Button>
  );
};

export default Login;