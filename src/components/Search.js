import { Divider, Input } from 'antd';

function Search({allFoods, setAllFoods}) {
    
    function searchHandle(e) {
        let searchedFood = allFoods.filter(food => food.name.startsWith(e.target.value))
        
        setAllFoods(searchedFood)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" onChange={searchHandle} />
    </>
  );
}

export default Search;