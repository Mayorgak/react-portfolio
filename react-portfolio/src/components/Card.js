import React from 'react'
import Card from "react-bootstrap/card";
import Carousel from '../components/Carousel';
import Button from "react-bootstrap/Button";





function portfolio(props) {
    return (
      <>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/100/100" />
          <Card.Body>
            <Card.Title classsName="text-center">Card Title</Card.Title>
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

export default portfolio;
