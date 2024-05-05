import React, { useState } from "react";

const NewTasks = ({ onAdd }) => {
  const [task, setTask] = useState();

  const handleChange = (e) => {
    setTask(e.target.value);
   
  };

  const handleClick = () => {
    if (!task) {
      alert("Please enter a task");
      return;
    }
    onAdd(task);
    setTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
      required
      value={task}
        onChange={handleChange}
        type="text"
        className="w-64 py-1 px-2 rounded-sm bg-stone-200"
      />
      <button onClick={handleClick} className="text-stone-700 hover:text-stone-900">Add task</button>
    </div>
  );
};

export default NewTasks;
