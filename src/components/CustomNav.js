import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import sbrpLogo from "../assets/img/south-bay-rehab-performance-logo.png"
import { FaGoogle, FaInstagram, FaYelp } from "react-icons/fa"
import { SOCIAL_MEDIA, NAV_SECTIONS } from "../constants"

const CustomNav = () => {
  return (
    <Navbar expand="lg" id="navbar" fixed="top">
      <Container className="navbar-container justify-content-between align-items-center">
        <Navbar.Brand href="#" className="brand-img-container">
            <img src={sbrpLogo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {NAV_SECTIONS.map((section) => (
              <Nav.Link key={section.id} href={`#${section.id}`}>
                {section.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ms-auto">
            <ul className="d-flex my-auto">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNav
