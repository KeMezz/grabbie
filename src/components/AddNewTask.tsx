import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import MotherSelector from "./MotherSelector";
import { useForm } from "react-hook-form";
import { AddNewTaskFormData } from "../types/add-new-task.type";

const AddNewTask: React.FC = () => {
  const { register, handleSubmit, control } = useForm<AddNewTaskFormData>();
  const onSubmit = (formData: AddNewTaskFormData) => {
    console.log(formData);
    console.log("submiited");
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900"
          type="button"
        >
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
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p>Add New Task</p>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            새로운 할 일 만들기
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            어떤 할 일을 만들고 싶으신가요?
          </Dialog.Description>
          <form onSubmit={handleSubmit(onSubmit)}>
            <MotherSelector control={control} />
            <textarea
              rows={5}
              className="border rounded-lg w-full p-4 outline-zinc-700"
              placeholder="할 일을 입력해주세요."
              {...register("text", { required: true })}
            />
            <div className="mt-[25px] flex justify-end">
              <button
                className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                type="submit"
              >
                추가하기
              </button>
            </div>
            <Dialog.Close asChild>
              <button
                className="text-zinc-700 hover:bg-zinc-100 focus:shadow-zinc-200 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
                type="button"
              >
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </Dialog.Close>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddNewTask;
