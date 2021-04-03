import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SignUpSuccessPage = () => {
  const history = useHistory();

  const onHomePress = () => {
    history.push("/");
  };

  return (
    <div>
      <p>Sign up successful! Check yer email</p>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            onHomePress();
            e.preventDefault();
          }}
        >
          Back To Home
        </Button>
    </div>
  );
};

export default SignUpSuccessPage;
