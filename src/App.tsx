import MotherTask from "./components/MotherTask";

interface Todos {
  [key: string]: Todo[];
}

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

function App() {
  const todos: Todos = {
    Scheduled: [
      {
        id: 1,
        text: "Grabbie!에 오신 것을 환영합니다.",
        isDone: false,
      },
      {
        id: 2,
        text: "할 일을 위 아래로 드래그 해보세요!",
        isDone: false,
      },
      {
        id: 3,
        text: "또는 할 일을 다른 섹션으로 드래그 해보세요!",
        isDone: false,
      },
      {
        id: 4,
        text: "할 일을 마우스 오른쪽 버튼으로 클릭해보세요!",
        isDone: false,
      },
      {
        id: 5,
        text: "마지막으로, 아래 버튼을 눌러 나만의 할 일을 만들어보세요.",
        isDone: false,
      },
    ],
    Doing: [
      {
        id: 1,
        text: "할 일을 만들었다",
        isDone: false,
      },
      {
        id: 2,
        text: "할 일을 만들었다",
        isDone: false,
      },
      {
        id: 3,
        text: "할 일을 만들었다",
        isDone: false,
      },
    ],
    Done: [
      {
        id: 1,
        text: "할 일을 만들었다",
        isDone: false,
      },
      {
        id: 2,
        text: "할 일을 만들었다",
        isDone: false,
      },
      {
        id: 3,
        text: "할 일을 만들었다",
        isDone: false,
      },
    ],
    Hold: [
      {
        id: 1,
        text: "할 일을 만들었다",
        isDone: false,
      },
      {
        id: 2,
        text: "할 일을 만들었다",
        isDone: false,
      },
      {
        id: 3,
        text: "할 일을 만들었다",
        isDone: false,
      },
    ],
    Trash: [
      {
        id: 1,
        text: "할 일을 만들었다",
        isDone: false,
      },
      {
        id: 2,
        text: "할 일을 만들었다",
        isDone: false,
      },
      {
        id: 3,
        text: "할 일을 만들었다",
        isDone: false,
      },
    ],
  };
  return (
    <>
      <header className="flex items-center px-9 gap-5 h-24">
        <h1 className="text-4xl font-bold underline">Grabbie!</h1>
      </header>
      <main className="">
        <section className="flex gap-6 p-6 pt-0 overflow-x-scroll h-[calc(100vh-96px)]">
          {Object.keys(todos).map((todoTitle, index) => (
            <MotherTask
              title={todoTitle}
              todos={todos[todoTitle]}
              key={index}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
