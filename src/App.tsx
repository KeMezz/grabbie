function App() {
  return (
    <>
      <header>
        <h1 className="p-8 text-3xl font-bold underline">Grabbie!</h1>
      </header>
      <main>
        <section className="flex gap-8 m-8 mt-0">
          <article className="border min-w-96 p-4 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Scheduled</h2>
            <div className="flex flex-col gap-2">
              <div className="p-3 bg-gray-100">
                <p>할 일을 만들었다</p>
              </div>
              <div className="p-3 bg-gray-100">
                <p>할 일을 만들었다</p>
              </div>
            </div>
            <input type="text" className="border-b px-3 py-2 outline-none" />
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
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
