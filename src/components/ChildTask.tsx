import React from "react";
import dayjs from "dayjs";
import { Draggable } from "react-beautiful-dnd";
import classNames from "classnames";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { todosState } from "../atoms/todos";
import { useRecoilValue } from "recoil";

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
  const todos = useRecoilValue(todosState);
  return (
    <Draggable draggableId={id + ""} index={index}>
      {(magic, snapshot) => (
        <div
          className={classNames(
            "rounded-lg bg-white shadow-sm flex flex-col mb-3 space-y-3",
            snapshot.isDragging ? "ring-2 ring-zinc-800" : ""
          )}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          <ContextMenu.Root>
            <ContextMenu.Trigger className="p-3">
              <p>{text}</p>
              <span className="text-xs text-gray-400 ml-auto">
                {dayjs(createdAt).fromNow()}
              </span>
            </ContextMenu.Trigger>
            <ContextMenu.Portal>
              <ContextMenu.Content className="min-w-[220px] bg-white rounded-md overflow-hidden p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                <ContextMenu.Item className="group text-[13px] leading-none text-zinc-800 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-3 select-none outline-none data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-800 data-[highlighted]:text-white">
                  <ContextMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
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
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </ContextMenu.ItemIndicator>
                  완료됨으로 표시
                </ContextMenu.Item>
                <ContextMenu.Item className="group text-[13px] leading-none text-zinc-800 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-3 select-none outline-none data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-800 data-[highlighted]:text-white">
                  <ContextMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
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
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </ContextMenu.ItemIndicator>
                  수정하기
                </ContextMenu.Item>
                <ContextMenu.Sub>
                  <ContextMenu.SubTrigger className="group text-[13px] leading-none text-zinc-800 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-3 select-none outline-none data-[state=open]:bg-zinc-300 data-[state=open]:text-zinc-800 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-800 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:bg-zinc-800 data-[highlighted]:data-[state=open]:text-violet1">
                    이동하기
                    <div className="ml-auto pl-5 text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </ContextMenu.SubTrigger>
                  <ContextMenu.Portal>
                    <ContextMenu.SubContent
                      className="min-w-[220px] bg-white rounded-md overflow-hidden p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
                      sideOffset={2}
                      alignOffset={-5}
                    >
                      {Object.keys(todos).map((section) => (
                        <ContextMenu.Item
                          key={section}
                          className="group text-[13px] leading-none text-zinc-800 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-3 select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-800 data-[highlighted]:text-violet1"
                        >
                          {section}
                        </ContextMenu.Item>
                      ))}
                    </ContextMenu.SubContent>
                  </ContextMenu.Portal>
                </ContextMenu.Sub>
                <ContextMenu.Separator className="h-[1px] bg-zinc-300 m-[5px]" />
                <ContextMenu.Item className="group text-[13px] leading-none text-zinc-800 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-3 select-none outline-none data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-red-600 data-[highlighted]:text-white">
                  <ContextMenu.ItemIndicator>
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
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </ContextMenu.ItemIndicator>
                  휴지통으로 이동
                </ContextMenu.Item>
              </ContextMenu.Content>
            </ContextMenu.Portal>
          </ContextMenu.Root>
        </div>
      )}
    </Draggable>
  );
};

export default ChildTask;
