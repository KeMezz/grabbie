import { DragDropContext, DropResult } from "react-beautiful-dnd";
import MotherTask from "./components/MotherTask";
import { useRecoilValue } from "recoil";
import { todosState } from "./atoms/todos";

function App() {
  const todos = useRecoilValue(todosState);
  const onDragEnd = (result: DropResult) => {
    console.log(result);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <header className="flex items-center px-9 gap-5 h-24">
        <h1 className="text-4xl font-bold underline">Grabbie!</h1>
      </header>
      <main>
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
    </DragDropContext>
  );
}

export default App;
