import React from "react";
import dayjs from "dayjs";

interface ChildTaskProps {
  id: number;
  text: string;
  isDone: boolean;
  createdAt: number;
}

const ChildTask: React.FC<ChildTaskProps> = ({ text, createdAt }) => {
  return (
    <div className="p-3 rounded-lg bg-white shadow-sm flex flex-col gap-3">
      <p>{text}</p>
      <span className="text-xs text-gray-400 ml-auto">
        {dayjs(createdAt).fromNow()}
      </span>
    </div>
  );
};

export default ChildTask;
