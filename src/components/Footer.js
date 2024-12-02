import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.svg'


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col className="footer-logo">
                        {/* <img src={logo} alt="Logo" /> */}
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/janarthana-collins-b62b77267/"><img src={navIcon1} /></a>
                        <a href="https://github.com/collinsjanarthana"><img src={navIcon2} /></a>
                       

                    </div>
                    <p>CopyRight 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}