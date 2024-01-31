import React from "react";
import ChildTask from "./ChildTask";
import AddNewTodo from "./AddNewTodo";
import { Todo } from "../types/todo.type";
import { Droppable } from "react-beautiful-dnd";
import classNames from "classnames";

interface MotherTaskProps {
  title: string;
  todos: Todo[];
}

const MotherTask: React.FC<MotherTaskProps> = ({ title, todos }) => {
  return (
    <Droppable droppableId={title}>
      {(magic, snapshot) => (
        <article
          className={classNames(
            "border w-96 shrink-0 p-4 flex flex-col gap-4 rounded-lg bg-gray-50 h-fit transition-colors",
            snapshot.isDraggingOver ? "bg-zinc-100" : "bg-gray-50"
          )}
        >
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div
            className="flex flex-col"
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {todos.map((todo, index) => (
              <ChildTask key={todo.id} index={index} {...todo} />
            ))}
            {!todos.length && !snapshot.isDraggingOver ? (
              <div className="p-3 flex justify-center items-center text-gray-300">
                이 섹션은 현재 비어있어요.
              </div>
            ) : null}
            {magic.placeholder}
          </div>
          <AddNewTodo defaultSection={title} />
        </article>
      )}
    </Droppable>
  );
};

export default MotherTask;
