import React from "react";
import dayjs from "dayjs";
import { Draggable } from "react-beautiful-dnd";

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
    <Draggable draggableId={id + ""} index={index}>
      {(magic, snapshot) => (
        <div
          className="p-3 rounded-lg bg-white shadow-sm flex flex-col gap-3"
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
