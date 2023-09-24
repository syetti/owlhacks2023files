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
        backgroundImage: 'linear-gradient(to left, #007EA7, #007EA7)',
        color: 'dark'
      }}
    >
      Log In
    </Button>
  );
};

export default Login;