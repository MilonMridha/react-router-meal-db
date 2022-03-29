import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
           <Navbar className='rounded'  bg="danger" expand="lg">
  <Container>
    <Navbar.Brand href="#home" className='text-warning' >Meal DB</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav" className=''>
      
      
      <Nav className="ms-auto 'text-light'">
        <CustomLink to="/" >Home</CustomLink>
        <CustomLink to="/restaurent" className='      ms-3'>Meals</CustomLink>
        <CustomLink to="/about" className=' ms-3'>About us</CustomLink>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;