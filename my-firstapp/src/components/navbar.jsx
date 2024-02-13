import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UseSelector, useSelector } from "react-redux";



function MyNav(){
   const reduxData= useSelector((state=>state))
   
 
    return(
        <Navbar bg="dark m-1" expand='lg' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="text-light text-lg fw-bold">Shipcart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home" className="text-info fw-bold">Home</Nav.Link>
            <Nav.Link href="product" className="text-info fw-bold ">Products</Nav.Link>
            <Nav.Link href="contact" className="text-info fw-bold">Contact</Nav.Link>
            <Nav.Link href="help" className="text-info fw-bold">Help</Nav.Link>
            <Nav.Link href="cart" className="text-info fw-bold">Cart ({reduxData.cart.length}) </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default MyNav;
