import axios from "axios";
import React, { useEffect, useState } from "react";

export interface TodoType {
  id: number;
  title: string;
  content: string;
  isCompleted: boolean;
  dateCreated: string;
  dateCompleted: string | null;
}

const URL = process.env.NEXT_PUBLIC_URL;

const useRequest = () => {
  const [data, setData] = useState<TodoType[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${URL}todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
          dateCreated: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        const json = await response.json();
        const copy = [...data, json];
        setData(copy);
      } else {
        console.error("Failed to submit data:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const fetchTodos = async () => {
    const res = await axios.get(`${URL}todo`);
    setData(res.data);
  };

  const deleteTodo = async (id: number) => {
    try {
      const res = await axios.delete(`${URL}todo/${id}`);
      if (res.status === 200) {
        const index = data.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          const copy = [...data];
          copy.splice(index, 1);
          setData(copy);
        }
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const updateTodo = async (id: number, isCompleted: boolean) => {
    try {
      const updatedData = {
        isCompleted,
        dateCompleted: isCompleted ? new Date().toISOString() : null,
      };
      const res = await axios.patch(`${URL}todo/${id}`, updatedData);

      if (res.status === 200) {
        setData((prevData) =>
          prevData.map((todo) =>
            todo.id === id ? { ...todo, ...updatedData } : todo
          )
        );
      }
    } catch (error) {
      console.log("Error updating todo:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return { handleSubmit, deleteTodo, updateTodo, setTitle, setContent, data };
};

export default useRequest;
