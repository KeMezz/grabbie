import React from "react";
import ChildTask from "./ChildTask";
import AddNewTodo from "./AddNewTodo";
import { Todo } from "../types/todo.type";

interface MotherTaskProps {
  title: string;
  todos: Todo[];
}

const MotherTask: React.FC<MotherTaskProps> = ({ title, todos }) => {
  return (
    <article className="border w-96 p-4 flex flex-col gap-4 rounded-lg bg-gray-50 h-fit">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-2">
        {todos.map((todo) => (
          <ChildTask key={todo.id} {...todo} />
        ))}
      </div>
      <AddNewTodo defaultSection={title} />
    </article>
  );
};

export default MotherTask;
