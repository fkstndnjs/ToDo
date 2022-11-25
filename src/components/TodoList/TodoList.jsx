import React, { useState } from "react";
import Input from "../Input/Input";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "장보기", status: "active" },
    { id: 2, text: "공부하기", status: "active" },
    { id: 3, text: "운동하기", status: "active" },
  ]);

  const addTodos = (text) => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: prev[prev.length - 1].id + 1,
          text,
          status: "active",
        },
      ];
    });
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
      <Input addTodos={addTodos} />
    </div>
  );
}
