import * as Select from "@radix-ui/react-select";
import React from "react";
import SelectItem from "./SelectItem";
import { Control, Controller } from "react-hook-form";
import { CreateTodoForm } from "../types/form.type";

interface MotherSelectorProps {
  control: Control<CreateTodoForm>;
}

const MotherSelector: React.FC<MotherSelectorProps> = ({ control }) => {
  return (
    <Controller
      name="sectionId"
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange } }) => (
        <Select.Root onValueChange={onChange}>
          <Select.Trigger
            className="inline-flex items-center justify-between rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-zinc-700 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-zinc-900 outline-none mb-4 w-full"
            aria-label="Sections"
          >
            <Select.Value placeholder="어느 섹션에 추가할까요?" />
            <Select.Icon className="text-zinc-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
              <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-zinc-700 cursor-default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </Select.ScrollUpButton>
              <Select.Viewport className="p-[5px]">
                <SelectItem value="1">Scheduled</SelectItem>
                <SelectItem value="2">Doing</SelectItem>
                <SelectItem value="3">Done</SelectItem>
                <SelectItem value="4">Hold</SelectItem>
              </Select.Viewport>
              <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-zinc-700 cursor-default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      )}
    ></Controller>
  );
};

export default MotherSelector;
