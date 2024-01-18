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
          {/* <article className="border min-w-96 p-4 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Scheduled</h2>
            <div className="flex flex-col gap-2">
              <div className="p-3 bg-gray-100">
                <p>할 일을 만들었다</p>
              </div>
              <div className="p-3 bg-gray-100">
                <p>할 일을 만들었다</p>
              </div>
            </div>
          </article>
          <article className="border min-w-96 p-4 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">In Progress</h2>
            <div className="flex flex-col gap-2">
              <div className="p-3 bg-gray-100">
                <p>할 일을 만들었다</p>
              </div>
              <div className="p-3 bg-gray-100">
                <p>할 일을 만들었다</p>
              </div>
            </div>
          </article>
          <article className="border min-w-96 p-4 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Hold</h2>
            <div className="flex flex-col gap-2">
              <div className="p-3 bg-gray-100">
                <p>할 일을 만들었다</p>
              </div>
              <div className="p-3 bg-gray-100">
                <p>할 일을 만들었다</p>
              </div>
            </div>
          </article> */}
        </section>
        <section className="fixed bottom-0 w-full bg-gray-100 p-6 flex justify-center items-center">
          <input type="text" className="w-full h-14 border-2" />
        </section>
      </main>
    </>
  );
}

export default App;
