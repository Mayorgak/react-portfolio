import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Kristen Mayorga",
      headerLinks: [
        { title: " Home", path: "/" },
        { title: " About", path: "/about" },
        { title: " Contact", path: "/contact" },
      ],
      home: {
        title: "Full Stack Web Developer",
        subTitle: "Always learning",
        text: "Checkout my projects below",
      },
      About: {
        title: "About Me",
      },
      Contact: {
        title: "Lets Connect",
      },
    };
  }

  render(){
  return (
    <div>
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom">
            <Navbar.Brand>Kristen Mayorga</Navbar.Brand>
          </Navbar>
        </Container>
      </Router>
    </div>
  );
}
}

export default App;
