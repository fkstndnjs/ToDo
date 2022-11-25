import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}
