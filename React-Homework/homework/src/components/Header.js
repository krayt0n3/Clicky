import React from "react";
import "../styles/Global.css";
import {Navbar, Nav} from "react-bootstrap"



export default class Header extends React.Component {
  render() {
    return (
        <div className="featured">
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
         Click an Image to Begin!
        </Nav>
       
      </Navbar>
       
            <h1>Clicky Game</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
    );
  }
}
