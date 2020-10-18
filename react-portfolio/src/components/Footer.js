import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaGithub , FaLinkedin } from "react-icons/fa";


function Footer() {
    return (
      <footer className="mt-5">
        <Container fluid={true}>
          <Row className="border-top justify-content-between p-3">
            <Col className="p-0" md={3} sm={8}></Col>
            <Col className="p-8 md={3} d-flex justify-content-end">
              <a target="_blank" href="https://github.com/Mayorgak">
                <FaGithub size={40} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kristen-mayorga/"
              >
                <FaLinkedin size={40} />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer
