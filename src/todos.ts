import { Todo } from "./types/todo.type";

interface Todos {
  [key: string]: Todo[];
}

const todos: Todos = {
  Scheduled: [
    {
      id: 1,
      sectionId: "Scheduled",
      text: "Grabbie!에 오신 것을 환영합니다!",
      isDone: false,
      description: "",
      due: "2021-06-01",
      createdAt: 1622425600000,
      updatedAt: 1622425600000,
    },
    {
      id: 2,
      sectionId: "Scheduled",
      text: "할 일을 붙잡고 위 아래로 움직여보세요.",
      isDone: false,
      description: "",
      due: "2021-06-01",
      createdAt: 1622425600000,
      updatedAt: 1622425600000,
    },
    {
      id: 3,
      sectionId: "Scheduled",
      text: "또는 할 일을 다른 섹션으로 옮겨보세요.",
      isDone: false,
      description: "",
      due: "2021-06-01",
      createdAt: 1622425600000,
      updatedAt: 1622425600000,
    },
    {
      id: 4,
      sectionId: "Scheduled",
      text: "할 일을 마우스 오른쪽 버튼으로 클릭해보세요.",
      isDone: false,
      description: "",
      due: "2021-06-01",
      createdAt: 1622425600000,
      updatedAt: 1622425600000,
    },
    {
      id: 5,
      sectionId: "Scheduled",
      text: "마지막으로, 아래 버튼을 눌러 나만의 할 일을 만들어보세요.",
      isDone: false,
      description: "",
      due: "2021-06-01",
      createdAt: 1622425600000,
      updatedAt: 1622425600000,
    },
  ],
};

export default todos;
