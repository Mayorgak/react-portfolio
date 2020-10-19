import React from 'react';
import CardInfo from '../components/CardInfo';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';




function card(props) {
  console.log(props);
    return (
      <div className="card-style">
        <Card style={{ width: "20rem" }} className="">
          <Card.Img variant="top" src={props.item.imgSrc} />
          <Card.Body>
            <Card.Title classsName="text-center">{props.item.title}</Card.Title>
            <Card.Text>{props.item.subTitle}</Card.Text>
            <Button variant="primary" target="_blank" href={props.item.link}>
              Check it out
            </Button>
          </Card.Body>
        </Card>

      </div>
    );

    
}
 

export default card;
