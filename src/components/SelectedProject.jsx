import React from "react";
import Tasks from "./Tasks";

const SelectedProject = ({
  project,
  setId,
  setShow,
  handleDeleteTask,
  handleAddTask,
}) => {
  if (!project) {
    return null; // or return some fallback UI
  }
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function handleDelete(id) {
    setId(id);
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={() => {
              handleDelete(project.id);
              setShow(false);
            }}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
        project={project}
      />
    </div>
  );
};

export default SelectedProject;
