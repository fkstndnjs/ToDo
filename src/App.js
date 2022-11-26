import Filter from "./components/Filter/Filter";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        backgroundColor: "antiquewhite",
        borderRadius: "20px",
        padding: "50px",
      }}
    >
      <Filter setFilter={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
