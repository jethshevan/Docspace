import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useRef } from "react";
import QRCode from "qrcode.react";
import emailjs from "emailjs-com";
import "../components/componentsCSS/modalPop.css";

function ModalPop({ handleGenerateQrCode, handleSendEmail, qrValue }) {
  //bootstrap - modal
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button
          key={idx}
          className="col-lg-2 col-md-4 col-5 mx-auto"
          style={{ backgroundColor: "Orange" }}
          // variant="primary border border-dark"
          onClick={() => handleShow(v)}
        >
          Get QR
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="popup-header" closeButton>
          <Modal.Title className="h6">Get My QR Code...!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="popup-body">
          <div>
            <div className="h2 fw-bold text-center mt-2">Generate QR Code!</div>
            {/* Display the generated QR code */}
            <div className="text-center mt-4">
              {qrValue && <QRCode value={qrValue} size={256} />}
            </div>

            <div className="text-center mt-4 mb-3">
              {/* Button to generate the QR code from the text */}
              <Button
                variant="primary"
                style={{ width: "200px" }}
                onClick={() => {
                  handleGenerateQrCode();
                }}
              >
                Create QR
              </Button>
            </div>

            <div className="text-center">
              {/* Button to send the QR code via email */}
              <Button
                variant="dark"
                style={{ width: "200px" }}
                size=""
                onClick={() => handleSendEmail()}
              >
                Send QR
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPop;
