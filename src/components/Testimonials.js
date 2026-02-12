import TestimonialCarousel from "./TestimonialCarousel"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { SOCIAL_MEDIA } from "../constants"

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <Container>
        <Row className="mb-3 mx-auto">
          <Col>
            <h1 className="section-title text-center">Testimonials</h1>
            <div className="section-description">
              <p className="section-description mb-0">To view more testimonials or to leave a review, please visit our <a href={SOCIAL_MEDIA.YELP} className="text-brand" target="_blank" rel="noopener noreferrer">Yelp</a> page or our <a href={SOCIAL_MEDIA.GOOGLE} className="text-brand" target="_blank" rel="noopener noreferrer">Google Reviews</a> page.</p>
              <p className="text-brand">Thank You! Any feedback is appreciated.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <TestimonialCarousel />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
