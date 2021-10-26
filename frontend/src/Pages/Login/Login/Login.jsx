import React from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../../../Context/AuthProvider";

const Login = () => {
  const { googleSignIn } = useAuth();

  return (
    <div>
      <div className="mb-2 mt-4">
        <Button onClick={googleSignIn} className="" variant="primary" size="lg">
          Google Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
