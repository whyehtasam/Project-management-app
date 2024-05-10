import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext({
  projects: [],
  setProjects: () => {[]},
  setDelId: () => {},
  setId: () => {},
  handleAddProject: () => {},
  handleAddTask: () => {},
  handleDeleteTask: () => {},
  project: [],
});

const TaskContextProvider = ({ children,setIsAdded }) => {
  const [projects, setProjects] = useState([]);
  const [isId, setId] = useState(null);
  const [delId, setDelId] = useState(null);

  const filteredProject = projects.filter((project) => project.id === isId);

  const handleAddProject = (project) => {
    setProjects((prevProjects) => {
      const newProjects = { ...project, id: Math.random() };

      setIsAdded(false);

      return [...prevProjects, newProjects];
    });
  };

  useEffect(() => {
    setProjects((currentProjects) =>
      currentProjects.filter((project) => project.id !== delId)
    );
  }, [delId]);
  console.log("projects: ", projects);
  function handleAddTask(text) {
    setProjects((prevProjects) => {
      const taskId = Math.random();
      const newTask = { text: text, taskId: taskId, projectId: isId };

      return prevProjects.map((project) => {
        if (project.id === isId) {
          return {
            ...project,
            task: Array.isArray(project.task)
              ? [...project.task, newTask]
              : [newTask],
          };
        } else {
          return project;
        }
      });
    });
  }
  function handleDeleteTask(id) {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id === isId) {
          return {
            ...project,
            task: project.task.filter((task) => task.taskId !== id),
          };
        } else {
          return project;
        }
      });
    });
  }

  const ctxTask = {
    projects,
    setProjects,
    setDelId,
    setId,
    handleAddProject,
    handleAddTask,
    handleDeleteTask,
    project: filteredProject[0],
  };
  return (
    <TaskContext.Provider value={ctxTask}>{children}</TaskContext.Provider>
  );
};

export default TaskContextProvider;
