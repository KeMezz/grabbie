import React from "react";

interface ChildTaskProps {
  id: number;
  text: string;
  isDone: boolean;
}

const ChildTask: React.FC<ChildTaskProps> = ({ text }) => {
  return (
    <div className="p-3 rounded-lg bg-white shadow-sm">
      <p>{text}</p>
    </div>
  );
};

export default ChildTask;
