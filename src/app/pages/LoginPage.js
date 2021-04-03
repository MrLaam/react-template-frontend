import React from "react";
import { Button, Form } from "react-bootstrap";
import { login } from "../services/authService";
import { useHistory } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  const history = useHistory();

  const validate = () => {
    return true;
  };

  const onLogin = async () => {
    setErrorMsg("");
    if (validate()) {
      const res = await login(email, password);

      if (res.message) {
        setErrorMsg(res.message);
      } else {
        setIsLoggedIn(true)
        history.push("/");
      }
    }
  };

  return (
    <div>
      <Form style={{ width: "90%", margin: "auto" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            onLogin();
            e.preventDefault();
          }}
        >
          Login
        </Button>

        {errorMsg && <p>{errorMsg}</p>}
      </Form>
    </div>
  );
};

export default LoginPage;
