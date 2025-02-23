import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Doctor from "../assets/Doctor.jpg";
import "../pages/pageCSS/booking.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    nic: "",
    location: "",
    date: "",
    number: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    //  required fields are filled
    const { name, age, nic, location, date, number } = formData;
    if (!name || !age || !nic || !location || !date || !number) {
      alert("Please fill out all fields before confirming.");
      return;
    }

    // EmailJS setup
    emailjs
      .send(
        "service_8peumdv", // EmailJS service ID
        "template_4dven69", // mailJS template ID
        formData,
        "ksSOmV9d1u0rOvQB7" // EmailJS user ID
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          // Reset form fields
          setFormData({
            name: "",
            age: "",
            nic: "",
            location: "",
            date: "",
            number: "",
          });
        },
        (error) => {
          alert("Failed to send email, please try again.");
        }
      );
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      age: "",
      nic: "",
      location: "",
      date: "",
      number: "",
    });
  };

  return (
    <>
      <Container fluid>
        <Row className="doc-row">
          <div className="doc-details mt-4 mb-4">Dr. Daniel Perera</div>
          <div className="doc-img-div mb-4">
            <img className="doc-img" src={Doctor} alt="Doctor" />
          </div>
        </Row>
      </Container>

      <Container fluid>
        <Row className="row-2 ps-5 pe-5 pt-4 pb-4">
          <Col md>
            <Form.Select
              name="location"
              value={formData.location}
              onChange={handleChange}
              aria-label="Default select example"
              className="selectbox mb-2 border border-dark rounded"
            >
              <option>Location</option>
              <option value="Asiri - Colombo 10">Asiri - Colombo 10</option>
              <option value="Hemas - Wattala">Hemas - Wattala</option>
              <option value="Nawaloka - Negombo">Nawaloka - Negombo</option>
            </Form.Select>
            <Form.Select
              name="date"
              value={formData.date}
              onChange={handleChange}
              aria-label="Default select example"
              className="selectbox mb-2 border border-dark rounded"
            >
              <option>Date</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </Form.Select>
            <Form.Select
              name="number"
              value={formData.number}
              onChange={handleChange}
              aria-label="Default select example"
              className="selectbox border border-dark rounded"
            >
              <option>Number</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Select>
          </Col>
          <Col md className="mt-4 mt-md-4">
            <div className="bill-text">Appointment charge 3000 LKR</div>
            <div className="bill-text">+ 10% DocSpace + TAX</div>
            <div className="bill-text">Total = 3750 LKR</div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="row-3">
          <div className="patient-details pt-4 pb-3">Patient's details</div>
          <div>
            <Stack
              direction="horizontal"
              className="col-md-5 col-10 mx-auto mb-2"
            >
              <Form.Control
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="me-auto border border-dark rounded"
                placeholder="Enter patient's name..."
              />
            </Stack>
          </div>
          <div>
            <Stack
              direction="horizontal"
              className="col-md-5 col-10 mx-auto mb-2 border border-dark"
            >
              <Form.Control
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="rounded me-auto"
                placeholder="Enter patient's age..."
              />
            </Stack>
          </div>
          <div>
            <Stack
              direction="horizontal"
              className="col-md-5 col-10 mx-auto mb-2 border border-dark"
            >
              <Form.Control
                name="nic"
                value={formData.nic}
                onChange={handleChange}
                className="me-auto "
                placeholder="Enter patient's NIC..."
              />
            </Stack>
          </div>
        </Row>
        <Row className="row-4 pb-5">
          <Stack gap={2} className="col-4 mx-auto p-2">
            <Button
              variant="primary"
              className="col-md-2 col-5 mx-auto"
              onClick={handleConfirm}
            >
              Confirm
            </Button>
            <Button
              variant="secondary"
              className="col-md-2 col-5 mx-auto"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Stack>
        </Row>
      </Container>
    </>
  );
}

export default Booking;
