import { DragDropContext, DropResult } from "react-beautiful-dnd";
import MotherTask from "./components/MotherTask";
import { useRecoilState } from "recoil";
import { todosState } from "./atoms/todos";

function App() {
  const [todos, setTodos] = useRecoilState(todosState);
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const draggedTodo = todos[result.source.droppableId].find(
      (todo) => todo.id === +result.draggableId
    );
    setTodos((prevTodos) => {
      const futureTodos = { ...prevTodos };
      futureTodos[result.source.droppableId] = futureTodos[
        result.source.droppableId
      ].filter((todo) => todo.id !== +result.draggableId);
      futureTodos[result.destination!.droppableId].splice(
        result.destination!.index,
        0,
        draggedTodo!
      );
      return futureTodos;
    });
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
