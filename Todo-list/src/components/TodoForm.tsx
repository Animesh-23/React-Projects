import { useState } from "react";

type todoType = {
  id: number;
  isCompleted: boolean;
  title: string;
};

const TodoForm = ({
  setTodos,
}: {
  setTodos: React.Dispatch<React.SetStateAction<todoType[]>>;
}) => {
  const [title, setTitle] = useState("");
  const addTodo = () => {
    setTodos((todos) => {
      return [...todos, { id: todos.length, isCompleted: false, title: title }];
    });
    setTitle("");
  };
  return (
    <div className="w-fit bg-white m-auto px-6 py-4 rounded-lg flex items-center gap-4">
      <input
        type="text"
        placeholder="Add todo item"
        value={title}
        className=" outline-none p-2 w-96 text-black font-medium text-xl border border-gray-200 rounded-md"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        className="  bg-blue-200 px-4 py-1 rounded-md text-slate-800 font-medium"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
