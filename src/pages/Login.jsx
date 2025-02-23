import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "../pages/pageCSS/registerForm.css";
import { useNavigate } from "react-router-dom";

function Login({ users, setLoggedInUser }) {
  const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const user = users.find(
      (user) => user.userName === uName && user.password === password
    );

    if (user) {
      setLoggedInUser(user); // Set the logged-in user
      navigate("/profile"); // Redirect to the profile page
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="form-outline pt-5 ps-md-5 pe-md-5">
      <div className="title text-center">Login</div>
      <div className="form-div pt-4 pb-2 ms-md-5 me-md-5">
        <Form onSubmit={handleLogin}>
          <Form.Group
            controlId="validationCustomUsername"
            className="input-field mb-3 mx-auto"
          >
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                onChange={(event) => setUName(event.target.value)}
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group
            className="input-field mb-3 mx-auto"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <div className="text-center mt-5 mb-5">
            <Button type="submit">Login</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
