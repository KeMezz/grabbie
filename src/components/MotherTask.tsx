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
    <article className="border min-w-96 p-4 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-2">
        {todos.map((todo) => (
          <ChildTask key={todo.id} {...todo} />
        ))}
      </div>
    </article>
  );
};

export default MotherTask;
