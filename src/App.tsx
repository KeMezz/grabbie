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
      {
        id: 4,
        text: "할 일을 만들었다",
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
      <header className="flex items-end px-9 py-6 gap-5">
        <h1 className="text-3xl font-bold underline">Grabbie!</h1>
        <span className="font-light">by hyeongjin</span>
      </header>
      <main className="">
        <section className="flex gap-6 p-6 pt-0 overflow-x-scroll">
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
