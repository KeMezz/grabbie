import MotherTask from "./components/MotherTask";

function App() {
  const todos = [
    {
      id: 1,
      text: "할 일을 만들었다",
      isDone: false,
    },
  ];
  return (
    <>
      <header>
        <h1 className="p-8 text-3xl font-bold underline">Grabbie!</h1>
      </header>
      <main>
        <section className="flex gap-8 m-8 mt-0">
          <MotherTask title="Scheduled" todos={todos} />
        </section>
      </main>
    </>
  );
}

export default App;
