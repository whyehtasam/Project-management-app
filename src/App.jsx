import { useState, useEffect } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";
import TaskContextProvider from "./store/task-context";

function App() {
  const [isAdded, setIsAdded] = useState(false);
  const [show, setShow] = useState(false);

  // const filteredProject = projects.filter((project) => project.id === isId);
  // const handleAddProject = (project) => {
  //   setProjects((prevProjects) => {
  //     const newProjects = { ...project, id: Math.random() };

  //     setIsAdded(false);

  //     return [...prevProjects, newProjects];
  //   });
  // };

  // console.log("projects: ", projects);

  return (
    <TaskContextProvider setIsAdded={setIsAdded}>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar
          setIsAdded={setIsAdded}
          
          setShow={setShow}
        />

        {isAdded ? (
          <NewProject
           
            setIsAdded={setIsAdded}
            show={show}
          />
        ) : (
          <NoProjectSelected setIsAdded={setIsAdded} show={show} />
        )}

        {show && (
          <SelectedProject
            // setId={setDelId}
            // project={filteredProject[0]}
            setShow={setShow}
            // handleAddTask={handleAddTask}
            // handleDeleteTask={handleDeleteTask}
          />
        )}
      </main>
    </TaskContextProvider>
  );
}

export default App;
