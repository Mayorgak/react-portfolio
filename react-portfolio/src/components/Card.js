import React from 'react'
import Card from "react-bootstrap/card";
import Carousel from '../components/Carousel';
import Button from "react-bootstrap/Button";


import "./Card.css";


function portfolio(props) {
    return (
      <>
        <div className="card-text-center">
         <div className="overflow">
          <img  src={props.imgsrc} alt="" className="card-img-top"/>
        </div>
        </div>

        <div className="card-body text-dark">
          <h4 className="card-title">Card Title</h4>
          <p className="card-text text-secondary">
            Full stack application
          </p>
          <a href="#" className="btn btn-outline-success">Go 
          Anywhere</a>

        </div> 

        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/100/100" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
}

export default Card;
