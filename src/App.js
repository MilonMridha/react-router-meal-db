
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import Restaurent from './Components/Restaurent/Restaurent';
import Home from './Components/Home/Home';

import MealDetail from './Components/MealDetails/MealDetail';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
     <Header></Header>
     
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
        <Route path="/restaurent" element={<Restaurent></Restaurent>} ></Route>
        <Route path='/meal/:mealId' element={<MealDetail></MealDetail>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
       

      </Routes>
    </div>
  );
}

export default App;
