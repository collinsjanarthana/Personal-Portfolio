import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.svg'
import { FaHeart } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="footer">
        <Container>
          <Row className="justify-content-center align-items-center text-center">
            <Col xs="auto">
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/janarthana-collins-b62b77267/">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://github.com/collinsjanarthana">
                  <img src={navIcon2} alt="GitHub" />
                </a>
              </div>
              <p className="mt-3">
                Made By Jana.
                <span>
                  <FaHeart size={15} color="white" style={{ marginLeft: "8px" }} />
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}