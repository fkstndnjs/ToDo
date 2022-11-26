import Filter from "./components/Filter/Filter";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <Filter setFilter={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
