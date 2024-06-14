"use client";
import InputForm from "./InputForm";
import TodoContainer from "./TodoContainer";

const Todolist = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="font-bold text-lg">Todo List</div>
      <TodoContainer />
    </div>
  );
};

export default Todolist;
