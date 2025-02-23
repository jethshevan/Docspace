import { Container, Row, Col, Button, Tab, Tabs } from "react-bootstrap";
import "../pages/pageCSS/profile.css";
import Patient from "../assets/Patient.jpeg";
import Sample from "../assets/sample.jpg";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ModalPop from "../components/ModalPop";
import QRCode from "qrcode.react";

function Profile({ user }) {
  const textRef = useRef();
  const textRef2 = useRef();
  const [qrValue, setQrValue] = useState("");

  const handleGenerateQrCode = () => {
    const text = textRef.current.innerText;
    const text2 = textRef2.current.innerText;
    setQrValue(text + text2);
  };

  const handleSendEmail = () => {
    if (!qrValue) {
      alert("Please generate the QR code first!");
      return;
    }

    //Selects the first <canvas> element in the document and converts it to a data URL in PNG format,
    //which can be used as an image source.
    const qrCanvas = document.querySelector("canvas");
    const qrDataURL = qrCanvas.toDataURL("image/png");

    //Defines an object templateParams that contains the recipient's
    // email address and the QR code image data.
    const templateParams = {
      to_email: "jethshevan@gmail.com",
      qr_code: qrDataURL,
    };

    emailjs
      .send(
        "service_8peumdv",
        "template_6i7ofyt",
        templateParams,
        "ksSOmV9d1u0rOvQB7"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <Container fluid>
      {/* Row-1 */}
      <Row className="profile-1 align-items-center ps-5 pe-5 pb-5">
        <div className="patient-name pt-3 pt-md-4">
          {user ? `${user.firstName} ${user.lastName}` : "Jessie Curl"}
        </div>
        <div className="text-center pt-3 pt-md-4">
          <img className="patient-img " src={Sample} alt="" />
        </div>
        <div className="text-center mt-4">
          <ModalPop
            handleGenerateQrCode={handleGenerateQrCode}
            handleSendEmail={handleSendEmail}
            qrValue={qrValue}
          />
        </div>
      </Row>

      {/* Row-2 */}
      <Row className="profile-2  ps-5 pe-5">
        <div className="tab-wrapper ps-3 pe-3">
          <Tabs
            defaultActiveKey="tests"
            id="justify-tab-example"
            className="mb-3  "
            justify
          >
            <Tab className="tab ps-5 pe-5 " eventKey="tests" title="Tests">
              <div ref={textRef}>
                <div className="row-2-test-txt text-md-center mt-4 mb-3 mb-md-2">
                  Blood Tests,
                </div>
                <div className="row-2-test-txt text-md-center mb-3 mb-md-2">
                  Urine Tests,
                </div>
                <div className="row-2-test-txt text-md-center mb-3 mb-md-2">
                  Imaging Tests,
                </div>
                <div className="row-2-test-txt text-md-center mb-3 mb-md-2">
                  Biopsies,
                </div>
                <div className="row-2-test-txt text-md-center mb-3 mb-md-2">
                  Cardiac Tests,
                </div>
                <div className="row-2-test-txt text-md-center mb-3 mb-md-2">
                  Mammogram,
                </div>
              </div>
            </Tab>
            <Tab
              className="tab ps-5 pe-5"
              eventKey="treatments"
              title="Treatments"
            >
              <div ref={textRef2}>
                <div className="row-2-treatment-txt text-md-center mt-4 mb-3 mb-md-2"></div>
                <div className="row-2-treatment-txt text-md-center mb-3 mb-md-2">
                  Amoxicillin,
                </div>
                <div className="row-2-treatment-txt text-md-center mb-3 mb-md-2">
                  Ciprofloxacin,
                </div>
                <div className="row-2-treatment-txt text-md-center mb-3 mb-md-2">
                  Acetaminophen (Tylenol),
                </div>
                <div className="row-2-treatment-txt text-md-center mb-3 mb-md-2">
                  Diphenhydramine (Benadryl),
                </div>
                <div className="row-2-treatment-txt text-md-center mb-3 mb-md-2">
                  Hydrochlorothiazide,
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Row>
    </Container>
  );
}

export default Profile;
