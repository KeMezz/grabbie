import { DragDropContext, DropResult } from "react-beautiful-dnd";
import MotherTask from "./components/MotherTask";
import { useRecoilState } from "recoil";
import { todosState } from "./atoms/todos";

function App() {
  const [todos, setTodos] = useRecoilState(todosState);

  // TODO: 로컬 스토리지 저장하는 기능 추가하기
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    const draggedTodo = todos[source.droppableId][source.index];
    if (source.droppableId === destination.droppableId) {
      setTodos((prevTodos) => {
        const destSection = [...prevTodos[source.droppableId]];
        destSection.splice(source.index, 1);
        destSection.splice(destination.index, 0, draggedTodo);
        return {
          ...prevTodos,
          [source.droppableId]: destSection,
        };
      });
    } else {
      setTodos((prevTodos) => {
        const sourceSection = [...prevTodos[source.droppableId]];
        const destSection = [...prevTodos[destination.droppableId]];
        sourceSection.splice(source.index, 1);
        destSection.splice(destination.index, 0, draggedTodo);
        return {
          ...prevTodos,
          [source.droppableId]: sourceSection,
          [destination.droppableId]: destSection,
        };
      });
    }
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
