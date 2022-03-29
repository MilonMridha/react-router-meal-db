import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    let {mealId} = useParams();
    const [meal, setMeal] = useState([]);
 

    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]))
           
},[])
    

    return (
        <div className='container d-flex justify-content-center mt-5'>
            <Card style={{ width: '18rem' }} className="shadow rounded">
              
  <Card.Img variant="top" src={meal.strMealThumb} />
  <Card.Body>
    <Card.Title>Name:{meal.strMeal}</Card.Title>
    <h6>Category : {meal.strCategory}</h6>
    <p>youtube: {meal.strYoutube}</p>

    <Card.Text>
      {meal.strInstructions}
    </Card.Text>
   </Card.Body>
</Card>
        </div>
    );
};

export default MealDetail;