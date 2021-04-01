import React from "react";
import { Button, Form } from "react-bootstrap";
import { register } from "../services/authService";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [forename, setForename] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  const history = useHistory();

  const validate = () => {
    return true;
  };

  const onSignUp = async () => {
    setErrorMsg("");
    if (validate()) {
      const res = await register(forename, surname, email, password);

      if (res.user || !res.message) {
        history.push("/sign-up-successful");
      } else {
        setErrorMsg(res.message);
      }
    }
  };

  return (
    <div>
      <Form style={{ width: "90%", margin: "auto" }}>
        <Form.Group controlId="formForename">
          <Form.Label>Forename</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            onChange={(e) => setForename(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Surname"
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox"></Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            onSignUp();
            e.preventDefault();
          }}
        >
          Submit
        </Button>

        {errorMsg && <p>{errorMsg}</p>}
      </Form>
    </div>
  );
};

export default SignUpPage;
