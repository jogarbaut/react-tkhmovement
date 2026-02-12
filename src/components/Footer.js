import { Container, Row, Col } from "react-bootstrap"
import { FaGoogle, FaInstagram, FaYelp } from "react-icons/fa"
import { SOCIAL_MEDIA, CONTACT_INFO, CLINIC_NAME } from "../constants"

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <Container className="footer-container">
        <Row className="gy-2">
          <Col md={4}>
            <h4>
              <a href="#home" className="footer-title text-white">
                {CLINIC_NAME}
              </a>
            </h4>
            <ul className="d-flex">
              <li className="nav-item">
                <a className="social-icon" href={SOCIAL_MEDIA.INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </li>
              <li className="nav-item">
                <a className="social-icon" href={SOCIAL_MEDIA.YELP} target="_blank" rel="noopener noreferrer" aria-label="Yelp">
                  <FaYelp />
                </a>
              </li>
              <li className="nav-item">
                <a className="social-icon" href={SOCIAL_MEDIA.GOOGLE} target="_blank" rel="noopener noreferrer" aria-label="Google Reviews">
                  <FaGoogle />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="ms-auto">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#clinic-information">Clinic Information</a>
              </li>
              <li>
                <a href="#services-scheduler">Services & Scheduler</a>
              </li>
              <li>
                <a href="#videos">Videos</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Contact</h4>
            <ul>
              <li>Email: {CONTACT_INFO.EMAIL}</li>
              <li>Address: {CONTACT_INFO.ADDRESS}</li>
              <li>Phone Number: {CONTACT_INFO.PHONE}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
