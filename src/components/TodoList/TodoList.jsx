import React, { useState } from "react";
import Input from "../Input/Input";
import Todo from "../Todo/Todo";

export default function TodoList({ filter }) {
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

  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleDelete = (todo) => {
    setTodos(todos.filter((to) => to.id !== todo.id));
  };

  const filtering = (todo, filt) => {
    if (filt === "all") {
      return todo;
    }
    return todo.filter((t) => t.status === filt);
  };

  const filterdTodos = filtering(todos, filter);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ul>
        {filterdTodos.map((todo) => (
          <Todo todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <Input addTodos={addTodos} />
    </div>
  );
}
