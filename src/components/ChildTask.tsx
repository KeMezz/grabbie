import React from "react";
import dayjs from "dayjs";

interface ChildTaskProps {
  id: number;
  text: string;
  isDone: boolean;
}

const ChildTask: React.FC<ChildTaskProps> = ({ id, text }) => {
  return (
    <div className="p-3 rounded-lg bg-white shadow-sm flex flex-col gap-3">
      <p>{text}</p>
      <span className="text-xs text-gray-400 ml-auto">
        {dayjs(id).fromNow()}
      </span>
    </div>
  );
};

export default ChildTask;
