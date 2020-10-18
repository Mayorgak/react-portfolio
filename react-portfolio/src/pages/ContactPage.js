import React from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  render() {
    return (
      <>
   

        <Container lg={12}>
          <Row className="justify-content-center py-5 ">
            <div className="right">
              
            </div>
            <Col md={8} sm={12}>
              <h5 className="display-4 font-weight-bolder">Contact Me</h5>
              <p>
                I'm an aspirging Full Stack Web Developer currently attending
                the University of Central Florida Coding Bootcamp. I'm a
                passionate developer who enjoys being challenged and growing in
                this dynamic tech industry. Looking to bring my attention to
                detail and technical skills to a company to become a valuable
                asset.
              </p>

              <p>
                When I'm not coding the day away, I like to spend time with my
                dog and family.{" "}
                
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ContactPage
