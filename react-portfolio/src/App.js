import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Lightning } from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";


import './App.css';

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Resume from './pages/Resume';
import ContactPage from './pages/ContactPage';

import { FaLaptopCode } from "react-icons/fa";


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
        title: "Kristen Mayorga ",
        subTitle: "Full Stack Developer",
        text: "",
      },
        Resume: {
        title: "Resume",
      },
      Contact: {
        title: "Lets Connect",
      },
    };
  }

  render(){
  return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>
            <FaLaptopCode size={40} />
          </Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route
          path="/"
          exact
          render={() => (
            <HomePage
              title={this.state.home.title}
              subTitle={this.state.home.subTitle}
              text={this.state.home.text}
            />
          )}
        />
          <Route
          path="/resume"
          render={() => <Resume title={this.state.resume} />}
        /> 
        <Route
          path="/contact"
          render={() => <ContactPage title={this.state.contact} />}
        /> 

        <Footer />
      </Container>
    </Router>
  );
}
}

export default App;
