import Filter from "./components/Filter/Filter";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Filter filter2={filter} setFilter={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
