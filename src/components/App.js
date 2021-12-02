import React, { useCallback, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [listOrig, setList] = useState(TASKS)
  
  function handleSetList(newList){
    setList(newList);
  }
  function selectedCategory(chosenCategory){
    
    if(chosenCategory === "All"){setList(TASKS)}
    else{
      const newList = listOrig.filter(task => task.category === chosenCategory)
      setList(newList)
    }
  }
  function handleTaskSubmit(newTask){
    setList([...listOrig, newTask])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  categories={CATEGORIES} selectedCategory={selectedCategory}/>
      <NewTaskForm onTaskFormSubmit={handleTaskSubmit} categories={CATEGORIES}/>
      <TaskList tasks={listOrig} handleSetList={handleSetList}/>
    </div>
  );
}

export default App;
