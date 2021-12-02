import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({tasks, handleSetList}) {

  function handleDelete(newItemID){
    handleSetList(tasks.filter(task => task.text !== newItemID))
  }
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul>
        {tasks.map(task => 
          <Task text={task.text}
                category={task.category}
                key={uuid()}
                handleDelete={handleDelete}/>
        )}
      </ul>
    </div>
  );
}

export default TaskList;
