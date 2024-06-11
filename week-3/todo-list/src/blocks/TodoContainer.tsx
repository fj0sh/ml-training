import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useRequest, { TodoType } from "@/app/hooks/useRequest";
import formatDate from "@/utils/functions/dateFormatter";

const TodoContainer = () => {
  const { handleSubmit, deleteTodo, updateTodo, setTitle, setContent, data } =
    useRequest();

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-2">
        <Input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <Input
          placeholder="Todo"
          onChange={(e) => setContent(e.target.value)}
        />
        <Button name="Add Todo" onClick={handleSubmit}></Button>
      </div>
      {data.map((x: TodoType) => (
        <div
          className={`flex flex-col border border-black rounded p-2 w-full gap-[10px]`}
          key={x.id}
        >
          <h1
            className={`text-center font-bold ${
              x.isCompleted ? "line-through" : ""
            }`}
          >
            {x.title}
          </h1>
          <div className="flex justify-center gap-4">
            <input
              type="checkbox"
              checked={x.isCompleted}
              onChange={() => updateTodo(x.id, !x.isCompleted)}
            />

            <Button
              name="Delete"
              className="border border-black rounded-lg p-[3px] text-[10px]"
              onClick={() => deleteTodo(x.id)}
            ></Button>
          </div>
          <p className="text-[10px] text-center">{formatDate(x.dateCreated)}</p>
          <p className="text-center break-words">{x.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoContainer;
