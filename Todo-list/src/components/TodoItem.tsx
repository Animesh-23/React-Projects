type todoType = {
  id: number;
  isCompleted: boolean;
  title: string;
};

const TodoItem = ({ todo }: { todo: todoType }) => {
  return (
    <div className=" bg-white p-3 text-black rounded-lg font-medium flex justify-between">
      <h3 className=" text-xl">{todo.title}</h3>
      <button className="  bg-blue-200 px-4 py-1 rounded-md text-slate-800 font-medium">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
