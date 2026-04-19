import React, { useState } from "react";

const Component4 = () => {
  const [mark, setMark] = useState(false);
  const[vale,setVale] = useState(0)
  const [newTask, setNewTask] = useState("");
  const [allTasks, setAlltaks] = useState([]);
  const dataSubmit = () => {
    setAlltaks([...allTasks, newTask]);
    setNewTask("")
  };
  const deleting = (ind) => {
    const updatedData = allTasks.filter((_, index) => ind != index);
    setAlltaks(updatedData);
  };
  const completed = (val)=>{
    setVale(val)
  }

  return (
    <div>
      <div className="flex flex-col gap-3 items-center">
        <h1>Simple ToDo APP</h1>
        <div>
          <div className="flex justify-center items-center gap-5">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="border border-green-500 px-2 py-1"
              placeholder="Enter Your Tasks Here.."
            />
            <button
              className="px-3 py-1 bg-green-600 text-white rounded-lg"
              onClick={dataSubmit}
            >
              Add Task
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          {allTasks
            ? allTasks.map((item, index) => {
                return (
                  <div className="flex justify-center items-center gap-4">
                    <p className={`  ${vale== index ? "line-through" : ""}`}>{item}</p>
                    <button
                      className="px-3 py-1 text-white bg-orange-500 rounded-lg"
                      onClick={() => completed(index)}
                    >
                      Completed
                    </button>
                    <button
                      className="px-3 py-1 text-white bg-red-600 rounded-lg"
                      onClick={() => deleting(index)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : "Not Taks added"}
        </div>
      </div>
    </div>
  );
};

export default Component4;
