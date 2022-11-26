import React from "react";

export default function Todo({ todo, onUpdate, onDelete }) {
  const handleChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? "completed" : "active" });
  };

  return (
    <li>
      <input
        type="checkbox"
        name=""
        id="checkbox"
        checked={todo.status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{todo.text}</label>
      <button
        onClick={() => {
          onDelete(todo);
        }}
      >
        삭제
      </button>
    </li>
  );
}
