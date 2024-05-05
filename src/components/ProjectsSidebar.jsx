import React from "react";
import Button from "./Button";

const ProjectsSidebar = ({ setIsAdded, projects, setId, setShow }) => {
  function openProject(id) {
    setId(id);
  }
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button
          onClick={() => {
            setIsAdded(true);
            setShow(false);
          }}
        >
          {" "}
          + Add Projects
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => {
                openProject(project.id);
                setIsAdded(false);
                setShow(true);
              }}
              className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
