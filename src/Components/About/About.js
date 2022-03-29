import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div className='container mt-5 d-flex justify-content-center'>
         <Card style={{ width: '18rem' }} className='shadow'>
  <Card.Body>
    <Card.Title className='text-success'>About Us</Card.Title>
    <Card.Subtitle className="mb-2 text-muted d-flex "></Card.Subtitle>
    <Card.Text>
     You can know many Information About us........
    </Card.Text>
   
  </Card.Body>
</Card>
        </div>
    );
};

export default About;