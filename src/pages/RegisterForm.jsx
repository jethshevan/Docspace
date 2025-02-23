import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "../pages/pageCSS/registerForm.css";
import { useNavigate } from "react-router-dom";

function RegisterForm({ addUser }) {
  const [validated, setValidated] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [uName, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      addUser({
        firstName: fName,
        lastName: lName,
        userName: uName,
        email: email,
        password: password,
      });

      //It is like an demo to show admin view
      navigate("/admin"); // Redirect to admin after successful registration
    }
    setValidated(true);
  };

  return (
    <div className="form-outline pt-5 ps-md-5 pe-md-5">
      <div className="title text-center">Register to DocSpace</div>
      <div className="form-div  pt-4 pb-2 ms-md-5 me-md-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group
            controlId="validationCustom01"
            className="input-field mb-3 mx-auto"
          >
            <Form.Label>First name</Form.Label>
            <Form.Control
              onChange={(event) => setFName(event.target.value)}
              required
              type="text"
              placeholder="First name"
            />
          </Form.Group>

          <Form.Group
            controlId="validationCustom02"
            className="input-field mb-3 mx-auto"
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control
              onChange={(event) => setLName(event.target.value)}
              required
              type="text"
              placeholder="Last name"
            />
          </Form.Group>

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
            controlId="formBasicEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              placeholder="Enter email"
            />
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
            <Button type="submit">Register</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default RegisterForm;
