import React, {useState} from "react";

function CategoryFilter({categories, selectedCategory}) {
  const [isSelected, setSelected] = useState("All")
  function handleButton(event){
    setSelected(event.target.name);
    selectedCategory(event.target.name)
  }
  function setClassName(category){
    if(isSelected === category){
      return "selected"
    }else{return null}
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category => <button onClick={handleButton}
                                          name={category}
                                          className={setClassName(category)}
                                          key={category}>{category}
                                  </button>)}
    </div>
  );
}
export default CategoryFilter;

