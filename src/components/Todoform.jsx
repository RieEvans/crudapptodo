import React, { useState } from "react";

export const Todoform = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
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
          placeholder="What is the task today ?"
          required
        />
        <button
          className="w-[100px] py-2 bg-emerald-400 font-bold text-slate-900"
          type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};
