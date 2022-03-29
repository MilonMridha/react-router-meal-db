import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurent = () => {
    const [searchText, setSearchText] =useState('');

    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        const url =(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)

        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[searchText])
   
    const searchFood = e => {
        setSearchText(e.target.value);
    }
    return (
        <div className='container mt-5'>
            <h2 className='text-success'>Find the Food</h2>
          <input  onChange={searchFood} type="text" />
          <h4 className='text-danger mt-3'>Found Item : {meals.length}</h4>
          <div className=' container row row-cols-1 row-cols-md-3 justify-content-center g-4 mt-4'>
              {
             meals.map(meal => <Meal meal={meal}
             key ={meal.idMeal}></Meal>)
              }
          </div>
            
        </div>
    );
};

export default Restaurent;
