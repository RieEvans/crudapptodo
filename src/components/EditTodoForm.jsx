import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id)
    setValue("");
  };
  return (
    <div className="">
      
      <form
        className="p-5 flex items-center justify-between"
        onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="w-full py-2 px-5 font-semibold outline-none"
          type="text"
          placeholder="Update Task"
          required
        />
        <button
          className="w-[150px] py-2 bg-emerald-400 font-bold text-slate-900"
          type="submit">
          Update Task
        </button>
      </form>
    </div>
  );
};
