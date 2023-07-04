import React from "react";

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className="flex items-center justify-between gap-5 bg-emerald-400 w-full mt-2 py-4 rounded-xl">
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""} px-5 font-semibold cursor-pointer`}>{task.task}</p>
      <div className="flex gap-2 px-5 cursor-pointer">
        <i onClick={() => editTodo(task.id)} className="fa-solid fa-pen-to-square"></i>
        <i onClick={() => deleteTodo (task.id) } className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
};
