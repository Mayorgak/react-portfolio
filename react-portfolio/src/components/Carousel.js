import React from 'react'
import Card from '../components/Card';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import drinkology from "../assets/images/drinkology.png";
import Todolist from "../assets/images/To-do-list.png";


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Drinkology",
          subTitle: "Cocktail Receipe look up",
          imgSrc: drinkology,
          link: "https://damp-peak-42313.herokuapp.com/",
          selected: false,
        },
        {
          id: 1,
          title: "To Do List",
          subTitle: "Keeping you Productive",
          imgSrc: Todolist,
          link: "https://guarded-cliffs-73920.herokuapp.com/",
          selected: false,
        },
    
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

render () {
  return (
    <Container fluid={true}>
      <Row className="justify-content-around">
        {this.makeItems(this.state)}
      </Row>
    </Container>
  );
}
}


export default Carousel;
