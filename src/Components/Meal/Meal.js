import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Meal = (props) => {
    const {meal} = props;
    const {strMeal, strMealThumb, strInstructions, idMeal} = meal;

    const navigate = useNavigate()

const clickHandleBtn = () => {
   navigate('/meal/'+ idMeal)
}

    return (
        <div className='container col-12'>
           <Card style={{ width: '18rem' }} className="shadow rounded">
  <Card.Img variant="top" src={strMealThumb} />
  <Card.Body>
    <Card.Title>{strMeal}</Card.Title>
    <Card.Text>
     {strInstructions.slice(0, 150)}
    </Card.Text>
    <Button onClick={clickHandleBtn} variant="success">Meal Details</Button>
    <Link to={'/meal/'+ idMeal}><span className='ms-2'> Show Details</span></Link>
  </Card.Body>
</Card>
        </div>
    );
};

export default Meal;