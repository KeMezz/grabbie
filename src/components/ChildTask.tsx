import React from "react";
import dayjs from "dayjs";
import { Draggable } from "react-beautiful-dnd";
import classNames from "classnames";

interface ChildTaskProps {
  id: number;
  text: string;
  isDone: boolean;
  createdAt: number;
  index: number;
}

const ChildTask: React.FC<ChildTaskProps> = ({
  id,
  text,
  createdAt,
  index,
}) => {
  return (
    // TODO: Add a context menu to edit or delete the task
    <Draggable draggableId={id + ""} index={index}>
      {(magic, snapshot) => (
        <div
          className={classNames(
            "p-3 rounded-lg bg-white shadow-sm flex flex-col mb-3 space-y-3",
            snapshot.isDragging ? "ring-2 ring-zinc-800" : ""
          )}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          <p>{text}</p>
          <span className="text-xs text-gray-400 ml-auto">
            {dayjs(createdAt).fromNow()}
          </span>
        </div>
      )}
    </Draggable>
  );
};

export default ChildTask;
