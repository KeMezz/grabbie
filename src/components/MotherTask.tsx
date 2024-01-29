import React from "react";
import ChildTask from "./ChildTask";
import AddNewTodo from "./AddNewTodo";
import { Todo } from "../types/todo.type";
import { Droppable } from "react-beautiful-dnd";

interface MotherTaskProps {
  title: string;
  todos: Todo[];
}

const MotherTask: React.FC<MotherTaskProps> = ({ title, todos }) => {
  return (
    <article className="border w-96 shrink-0 p-4 flex flex-col gap-4 rounded-lg bg-gray-50 h-fit">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Droppable droppableId={title}>
        {(magic, snapshot) => (
          <div
            className="flex flex-col"
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {todos.map((todo, index) => (
              <ChildTask key={todo.id} index={index} {...todo} />
            ))}
            {magic.placeholder}
          </div>
        )}
      </Droppable>
      <AddNewTodo defaultSection={title} />
    </article>
  );
};

export default MotherTask;
