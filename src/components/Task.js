import React from "react";

function Task({text, category, handleDelete}) {
  function deleteTask(event){
    handleDelete(event.target.id)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button id={text} onClick ={deleteTask} className="delete">X</button>
    </div>
  );
}

export default Task;
