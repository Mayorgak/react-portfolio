import React from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/FormFile";




function ContactPage() {
    return (
      <>
        <Container lg={12}>
          <Row className="justify-content-center py-5 ">
            <div className="right">
              {/* <img clasName="" src={} alt="" /> */}
            </div>
            <Col md={8} sm={12}>
              <h1 className="display-5 font-weight-bolder">Contact Me</h1>
            </Col>
          </Row>
        </Container>
      
      
      </>
    );
}

export default ContactPage
