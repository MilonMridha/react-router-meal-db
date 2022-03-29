import React from 'react';
import { Card } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
             <div className='container mt-5 d-flex justify-content-center'>
         <Card style={{ width: '18rem' }} className='shadow'>
  <Card.Body>
    <Card.Title className='text-danger'> <h1>Not Found</h1></Card.Title>
    <Card.Subtitle className="mb-2 text-center text-danger "> <h3>404</h3></Card.Subtitle>
    <Card.Text>
     There are no result by ur wrong search.....
    </Card.Text>
   
  </Card.Body>
</Card>
        </div>
        </div>
    );
};

export default NotFound;