import React from 'react'
import Hero from '../components/Hero'
import kristen from '../assets/images/Kristen.png';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import  "../pages/AboutPage.css"
import ReactTypingEffect from "react-typing-effect";

// import { Container } from "react-bootstrap";

function AboutPage(props) {
    return (
      <Container lg={12}>
        <Row className="justify-content-center py-5 ">
          <div className="right">
            <img className="" src={kristen} alt="kristen" />
          </div>
          <Col md={8} sm={12}>
            <h5 className="display-3 font-weight-bolder">About Me</h5>
            <p>
              I'm an aspirging Full Stack Web Developer currently attending the
              University of Central Florida Coding Bootcamp. I'm a passionate
              developer who enjoys being challenged and growing in this dynamic
              tech industry. Looking to bring my attention to detail and
              technical skills to a company to become a valuable asset.
            </p>

            <p>
              When I'm not coding the day away, I like to spend time with my dog
              and family.{" "}
              <ReactTypingEffect text="I enjoy movies, reading and exploring new places." />
              <span className="emoji">🌍</span>
            </p>
          </Col>
        </Row>
      </Container>
      
    );
}

export default AboutPage;
