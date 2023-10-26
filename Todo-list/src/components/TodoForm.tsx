const TodoForm = () => {
  return (
    <div className="w-fit bg-white m-auto px-6 py-4 rounded-lg flex items-center gap-4">
      <input
        type="text"
        placeholder="Add todo item"
        className=" outline-none p-2 w-96 text-black font-medium text-xl border border-gray-200 rounded-md"
      />
      <button className="  bg-blue-200 px-4 py-1 rounded-md text-slate-800 font-medium">
        Add
      </button>
    </div>
  );
};

export default TodoForm;
