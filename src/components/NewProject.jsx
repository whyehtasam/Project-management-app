import React, { useRef,useContext } from "react";
import Input from "./Input";
import Modal from "./Modal";
import { TaskContext } from "../store/task-context";

const NewProject = ({  setIsAdded }) => {

  const {handleAddProject} = useContext(TaskContext);
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    handleAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };
  return (
    <>
      <Modal ref={modal}>
      <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
      <p className="text-stone-400 mb-4">Oops... Looks like you forgot to enter the value..</p>
      <p className="text-stone-400 mb-4">Please enter the correct input value in the fields !!</p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={() => setIsAdded(false)}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancle
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
