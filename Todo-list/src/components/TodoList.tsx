import TodoItem from "./TodoItem";
type todoType = {
  id: number;
  isCompleted: boolean;
  title: string;
};

const TodoList = ({ todos }: { todos: todoType[] }) => {
  return (
    <div className=" m-10 grid grid-cols-3 gap-6">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
