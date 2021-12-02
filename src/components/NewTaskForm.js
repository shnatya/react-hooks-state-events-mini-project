import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: "",
  })
  
  function handleNewTask(event){
    const name = event.target.name;
    let value = event.target.value;
    setNewTask({
      ...newTask,
      [name]: value,
    })
  }
  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit(newTask)
  }
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleNewTask} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleNewTask} name="category">
          {/* render <option> elements for each category here */}
          {categories.map(item => <option value={item} key={item}>{item}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
