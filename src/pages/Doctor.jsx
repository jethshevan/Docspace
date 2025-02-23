import { Container, Row, Col, Card, Button } from "react-bootstrap";
import img from "../assets/Doctor.jpg";
import License from "../assets/License.png";
import { Link } from "react-router-dom";
import "../pages/pageCSS/doctor.css";

function Doctor() {
  return (
    <div>
      <Container fluid>
        {/* row - 1 */}
        <Row className="row-1 align-items-center p-md-5 ps-5 pe-5">
          <Col md className="pt-md-0 pb-md-0 pt-4 pb-4">
            <div className="doc-name mb-3">Dr. Daniel Perera</div>
            <div className="doc-txt">Physician</div>
            <div className="doc-txt">MBBS Colombo.</div>
            <div className="doc-txt">General Hospital - Colombo.</div>
          </Col>

          <Col md className="pt-md-0 pb-md-0">
            <div className="doc-image">
              <img className="doctor-img img-fluid" src={img} alt="doctor" />
            </div>
          </Col>
        </Row>

        {/* row - 2 */}
        <Row className="row-2 align-items-center pt-5 p-md-5 ps-5 pe-5">
          <Col md className="pt-md-0 pb-md-0 pb-3">
            <div className="doc-image ">
              <img
                className="doctor-img img-fluid"
                src={License}
                alt="doctor"
              />
            </div>
          </Col>
          <Col md className="pt-md-0 pb-md-0 pt-4">
            <div className="doc-qualification mb-4 mb-md-4">Qualifications</div>
            <div className="doc-txt">MBBS Colombo University Srilanka</div>
            <div className="doc-txt">2012</div>
            <div className="doc-txt">Clinical Experience - 8 years</div>
            <div className="doc-txt">License : 1254863 Sri Lanka</div>
            <div className="doc-txt">email - danielperera@docspace.com</div>
          </Col>
        </Row>

        {/* row - 3 */}
        <Row className="row-3 pt-5">
          <div className="doc-treatment pb-4 pb-md-5 mb-lg-4">Treatments</div>
          <Row className="mx-auto p-0 pe-5 ps-5 ">
            <Col lg={4} md={6} className="mb-lg-4 mb-md-5 mb-4">
              <Card>
                <Card.Body className="border border-dark ">
                  <svg
                    height="30px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className=""
                  >
                    <path
                      fill="#000000"
                      d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1 96 192c0 53 43 96 96 96s96-43 96-96l0-120.9-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1L352 192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112l0-70.7c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 70.7c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192L32 71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                    />
                  </svg>
                  <div className="d-inline ms-3">
                    Diagnosis and treatment of illnesses
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-lg-4 mb-md-5 mb-4">
              <Card>
                <Card.Body className="border border-dark">
                  <svg
                    height="33px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className=""
                  >
                    <path d="M96 352L96 96c0-35.3 28.7-64 64-64l256 0c35.3 0 64 28.7 64 64l0 197.5c0 17-6.7 33.3-18.7 45.3l-58.5 58.5c-12 12-28.3 18.7-45.3 18.7L160 416c-35.3 0-64-28.7-64-64zM272 128c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0zm24 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-160 0C60.9 512 0 451.1 0 376L0 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 224c0 48.6 39.4 88 88 88l160 0z" />
                  </svg>
                  <div className="d-inline ms-3">
                    Prescription of medications and therapies
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-lg-4 mb-md-5 mb-4">
              <Card>
                <Card.Body className="border border-dark">
                  <svg
                    height="30px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className=""
                  >
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                  </svg>
                  <div className="d-inline ms-3">
                    Performing medical examinations and tests
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* </Row> */}
            {/* <Row className="mx-auto p-0 pe-5 ps-5 "> */}
            <Col lg={4} md={6} className="mb-lg-4 mb-md-5 mb-4">
              <Card>
                <Card.Body className="border border-dark">
                  <svg
                    height="30px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className=""
                  >
                    <path d="M441 7l32 32 32 32c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15L417.9 128l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72L295 73c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55 55L422.1 56 407 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM210.3 155.7l61.1-61.1c.3 .3 .6 .7 1 1l16 16 56 56 56 56 16 16c.3 .3 .6 .6 1 1l-191 191c-10.5 10.5-24.7 16.4-39.6 16.4l-88.8 0L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57 0-88.8c0-14.9 5.9-29.1 16.4-39.6l43.3-43.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57z" />
                  </svg>
                  <div className="d-inline ms-3">
                    Managing chronic diseases and conditions
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-lg-4 mb-md-5 mb-4">
              <Card>
                <Card.Body className="border border-dark">
                  <svg
                    height="27px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className=""
                  >
                    <path d="M0 48C0 21.5 21.5 0 48 0L368 0c26.5 0 48 21.5 48 48l0 48 50.7 0c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3l0 18.7 0 32 0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c0 53-43 96-96 96s-96-43-96-96l-128 0c0 53-43 96-96 96s-96-43-96-96l-16 0c-26.5 0-48-21.5-48-48L0 48zM416 256l128 0 0-18.7L466.7 160 416 160l0 96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM176 80l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
                  </svg>
                  <div className="d-inline ms-3">
                    Conducting minor and major surgeries
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-lg-4 mb-md-5 mb-4">
              <Card>
                <Card.Body className="border border-dark">
                  <svg
                    height="30px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className=""
                  >
                    <path d="M96 382.1l0-88.8c0-14.9 5.9-29.1 16.4-39.6l27.3-27.3 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 41.4-41.4 57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57 45.5-45.5C355.2 10.9 381.4 0 408.8 0C465.8 0 512 46.2 512 103.2c0 27.4-10.9 53.6-30.2 73L258.3 399.6c-10.5 10.5-24.7 16.4-39.6 16.4l-88.8 0L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l89-89z" />
                  </svg>
                  <div className="d-inline ms-3">
                    Providing preventive health care advice
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* </Row> */}
            {/* <Row className="mx-auto p-0 pe-5 ps-5 "> */}
            <Col lg={4} md={6} className="mb-lg-4 mb-md-5 mb-4">
              <Card>
                <Card.Body className="border border-dark">
                  <svg
                    height="32px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className=""
                  >
                    <path d="M160 32c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32c-17.7 0-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32zM32 448l288 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l0-64c106 0 192 86 192 192c0 49.2-18.5 94-48.9 128l16.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32zm80-64l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                  </svg>
                  <div className="d-inline ms-3">
                    Offering vaccination and immunization services
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-lg-4 mb-md-5 mb-4">
              <Card>
                <Card.Body className="border border-dark">
                  <svg
                    height="30px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className=""
                  >
                    <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
                  </svg>
                  <div className="d-inline ms-3">
                    Interpreting diagnostic imaging results
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-lg-4 mb-md-5 mb-4">
              <Card>
                <Card.Body className="border border-dark">
                  <svg
                    height="30px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className=""
                  >
                    <path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM120.5 247.2c12.4-4.7 18.7-18.5 14-30.9s-18.5-18.7-30.9-14C43.1 225.1 0 283.5 0 352c0 88.4 71.6 160 160 160c61.2 0 114.3-34.3 141.2-84.7c6.2-11.7 1.8-26.2-9.9-32.5s-26.2-1.8-32.5 9.9C240 440 202.8 464 160 464C98.1 464 48 413.9 48 352c0-47.9 30.1-88.8 72.5-104.8zM259.8 176l-1.9-9.7c-4.5-22.3-24-38.3-46.8-38.3c-30.1 0-52.7 27.5-46.8 57l23.1 115.5c6 29.9 32.2 51.4 62.8 51.4l5.1 0c.4 0 .8 0 1.3 0l94.1 0c6.7 0 12.6 4.1 15 10.4L402 459.2c6 16.1 23.8 24.6 40.1 19.1l48-16c16.8-5.6 25.8-23.7 20.2-40.5s-23.7-25.8-40.5-20.2l-18.7 6.2-25.5-68c-11.7-31.2-41.6-51.9-74.9-51.9l-68.5 0-9.6-48 63.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-76.2 0z" />
                  </svg>
                  <div className="d-inline ms-3">
                    Providing referrals to specialists as needed
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>

        {/* row -4 */}
        <Row className="row-4 pt-4 pt-lg-5 pt-md-4 pb-5">
          <div className="row-4-LocatonTime mb-4 mb-md-4 mb-lg-4 ">
            Location &nbsp; & &nbsp; Time
          </div>
          <div className="row-4-txt pb-3">
            Asiri Hospital Colombo 10 - weekdays 4.00pm - 6.00pm
          </div>
          <div className="row-4-txt pb-3">
            Hemas Hospital Wattala - weekdays 7.00pm - 9.00pm
          </div>
          <div className="row-4-txt pb-3">
            Nawaloka Hospital Negombo - Sunday 5.00pm - 9.00pm
          </div>
          <div className="text-center">
            <Link to="/book">
              <Button
                className="col-md-3 col-5 mx-auto mt-3 mt-md-3 mt-lg-3 "
                variant="primary"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
}
export default Doctor;
