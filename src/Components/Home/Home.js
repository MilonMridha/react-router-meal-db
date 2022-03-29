import React from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='container mt-5 d-flex justify-content-center'>
         <Card style={{ width: '18rem' }} className='shadow'>
  <Card.Body>
    <Card.Title className='text-success'>Welcome To Meal DB</Card.Title>
    <Card.Subtitle className="mb-2 text-muted d-flex "></Card.Subtitle>
    <Card.Text>
     This is our Restaurent....
     You can visit it.
    </Card.Text>
   
  </Card.Body>
</Card>
        </div>
    );
};

export default Home;