import React from 'react';
import CardInfo from '../components/CardInfo';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";



function card(props) {
  console.log(props);
    return (
      <Card style={{ width: "20rem" }} className="i" >
        <Card.Img variant="top" src={props.item.imgSrc} />
        <Card.Body>
          <Card.Title classsName="text-center">{props.item.title}</Card.Title>
          <Card.Text>{props.item.subTitle}</Card.Text>
          <Button variant="primary" target="_blank" href={props.item.link}>
            Check it out
          </Button>
        </Card.Body>
      </Card>

      // <div
      //   className="d-inline-block k-card"
      //   onClick={(e) => props.click(props.item)}
      // >
      //   <img
      //     className="k-card-image"
      //     src={props.item.imgSrc}
      //     alt={props.item.imgSrc}
      //   />
      //   {props.item.selected && (
      //     <CardInfo
      //       title={props.item.title}
      //       subTitle={props.item.subTitle}
      //       link={props.item.link}
      //     />
      //   )}
      // </div>
    );

    
}
 

export default card;
