import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search'
import { Row, Divider, Button } from 'antd';


function App() {
  
  const [allFoods, setAllFoods] = useState(foods);
  const [display, setDisplay] = useState(true);
  const showForm = (
    <div>
    <AddFoodForm allFoods= {allFoods} setAllFoods={setAllFoods}/>
    <Button onClick= {() => {hideShowForm()}}> Hide </Button>
    </div>
  )
  const hideForm = (
    <Button onClick= {() => {hideShowForm()}}> Add Food </Button>
  )

  function hideShowForm() {
    setDisplay(display === true ? false : true)
    return display
  }


  return (
    <div className='App'>
      {display===true ? showForm : hideForm}

      <Search allFoods = {allFoods} setAllFoods = {setAllFoods}/>

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {allFoods.length ? allFoods.map(food => {
           return (
              <FoodBox food={food} allFoods= {allFoods} setAllFoods={setAllFoods} key={food.name}/>
          )
        })
        : (<img src='https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result_still_2x.gif?compress=1&resize=400x300' alt='No results found'/>) 
        }
      </Row>
    </div>
  );
}

export default App;
