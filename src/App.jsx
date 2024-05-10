import { useState, useEffect } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";
import TaskContextProvider from "./store/task-context";

function App() {
  const [isAdded, setIsAdded] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <TaskContextProvider setIsAdded={setIsAdded}>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar setIsAdded={setIsAdded} setShow={setShow} />

        {isAdded ? (
          <NewProject setIsAdded={setIsAdded} show={show} />
        ) : (
          <NoProjectSelected setIsAdded={setIsAdded} show={show} />
        )}

        {show && <SelectedProject setShow={setShow} />}
      </main>
    </TaskContextProvider>
  );
}

export default App;
