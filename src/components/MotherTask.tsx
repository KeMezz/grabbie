import React from "react";
import ChildTask from "./ChildTask";

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

interface MotherTaskProps {
  title: string;
  todos: Todo[];
}

const MotherTask: React.FC<MotherTaskProps> = ({ title, todos }) => {
  return (
    <article className="border min-w-96 p-4 flex flex-col gap-4 rounded-lg bg-gray-50 h-fit">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-2">
        {todos.map((todo) => (
          <ChildTask key={todo.id} {...todo} />
        ))}
      </div>
      <button className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p>Add New Task</p>
      </button>
    </article>
  );
};

export default MotherTask;
