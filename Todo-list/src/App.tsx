import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

interface todoType {
  id: number;
  isCompleted: boolean;
  title: string;
}
const App = () => {
  const [todos, setTodos] = useState<todoType[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (!data) {
      return;
    }
    const todos = JSON.parse(data);

    setTodos(todos);
  }, [setTodos]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className=" h-screen bg-blue-200 pt-10">
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
