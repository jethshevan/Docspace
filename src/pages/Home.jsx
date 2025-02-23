import "../pages/pageCSS/home.css";
import Image from "react-bootstrap/Image";
import { Container, Row } from "react-bootstrap";
import Hero from "../assets/DoctorImage.png";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div>
      <Container fluid className="m-0">
        <Row className="row-1">
          <Image className="hero p-0" src={Hero} />
        </Row>
        <Row className="row-2">
          <Button
            onClick={() => navigate("/doctor")} // Use the navigate function
            variant="primary"
            className="rounded-0 btn-lg"
          >
            Channel My Doctor Now
            <svg
              className="ms-3 mb-1 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="23px"
              width="23px"
            >
              <path
                fill="#ffffff"
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
