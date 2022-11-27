import React, { useState } from "react";
import styles from "./Input.module.css";

export default function Input({ addTodos }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    const trimmedText = text.trim();
    e.preventDefault();

    if (trimmedText.length === 0) {
      setText("");
      return;
    }

    addTodos(trimmedText);
    setText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button className={styles.button}>Add</button>
    </form>
  );
}
