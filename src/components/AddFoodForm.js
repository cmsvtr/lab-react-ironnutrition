import { useState } from "react";
import { Input, Divider } from 'antd';

function AddFoodForm({allFoods, setAllFoods}) {
    const [foodForm, setFoodForm] = useState({
            "name": "",
            "calories": 0,
            "image": "",
            "servings": 0
    })

    function handleForm(e) {
        setFoodForm({...foodForm, [e.target.name] : e.target.value})

    }

    function handleSubmit(e) {
        e.preventDefault();

        setAllFoods([...allFoods, foodForm]);

        setFoodForm({
            "name": "",
            "calories": 0,
            "image": "",
            "servings": 0            
        })
    }
    
    return (
        <form>
            <Divider>Add new item</Divider> 
            <label>Food name</label>
            <Input value={foodForm.name} name='name' type="text" onChange={handleForm} />
            <label>Calories</label>
            <Input value={foodForm.calories} name= 'calories' type="number" onChange={handleForm} />
            <label>Servings</label>
            <Input value={foodForm.servings} name= 'servings' type="number" onChange={handleForm} />
            <label>Url of Image</label>        
            <Input value={foodForm.image} name= 'image' type="text" onChange={handleForm} />
            <button type="submit" onClick={handleSubmit}>Create Item</button>
        </form>
     );
}

export default AddFoodForm;