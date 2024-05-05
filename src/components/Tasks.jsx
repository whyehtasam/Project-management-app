import React from "react";
import NewTasks from "./NewTasks";

const Tasks = ({ handleAddTask, handleDeleteTask, project }) => {
  return (

    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTasks onAdd={handleAddTask} />
      
      {Array.isArray(project.task) && project.task.length > 0 && (  <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {Array.isArray(project.task) &&
          project.task.map((task) => (
            <>
              <li
              key={task.taskId}
               className="flex justify-between my-4 bg-stone-200 p-2 rounded-md">
                {task.text}
                <button onClick={()=> handleDeleteTask(task.taskId)} className="text-stone-700 hover:text-red-500">
                  Clear
                </button>
              </li>
            </>
          ))}
      </ul>) }
     
    </section>
  );
};

export default Tasks;
