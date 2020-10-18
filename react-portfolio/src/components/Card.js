import React from 'react';
import CardInfo from '../components/CardInfo';


function card(props) {
    return (
      /* <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/100/100" />
          <Card.Body>
            <Card.Title classsName="text-center">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */

      <div
        className="d-inline-block g-card"
        onClick={(e) => props.click(props.item)}
      >
        <img className="" src={props.item.imgSrc} alt={props.item.imgSrc} />
        {props.item.selected && (
          <CardInfo
            title={props.item.title}
            subTitle={props.item.subTitle}
            link={props.item.link}
          />
        )}
      </div>
    );
}

export default card;
