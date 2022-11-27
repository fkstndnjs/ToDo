import React from "react";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const handleChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? "complete" : "active" });
  };

  return (
    <li className={styles.li}>
      <input
        type="checkbox"
        name=""
        id="checkbox"
        checked={todo.status === "complete"}
        onChange={handleChange}
      />
      <label className={styles.label} htmlFor="checkbox">
        {todo.text}
      </label>
      <span className={styles.icon}>
        <button
          className={styles.button}
          onClick={() => {
            onDelete(todo);
          }}
        >
          삭제
        </button>
      </span>
    </li>
  );
}
