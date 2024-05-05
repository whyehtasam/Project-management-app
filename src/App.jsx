import { useState, useEffect } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [isAdded, setIsAdded] = useState(false);
  const [show, setShow] = useState(false);
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
          task: Array.isArray(project.task) ? [...project.task, newTask] : [newTask]
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
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        setIsAdded={setIsAdded}
        projects={projects}
        setId={setId}
        setShow={setShow}
      />

      {isAdded ? (
        <NewProject
          addData={handleAddProject}
          setIsAdded={setIsAdded}
          show={show}
        />
      ) : (
        <NoProjectSelected setIsAdded={setIsAdded} show={show} />
      )}

      {show && (
        <SelectedProject
          setId={setDelId}
          project={filteredProject[0]}
          setShow={setShow}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
        />
      )}
    </main>
  );
}

export default App;
