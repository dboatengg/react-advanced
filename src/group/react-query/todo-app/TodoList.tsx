import useTodo from "./hook/useTodo"
import TodoForm from "./TodoForm"


const TodoList = () => {
  const {data, isLoading, error} = useTodo();

  return (
    <>
    <TodoForm/>
    <ul className="list-group">
      {data?.map(todo=>(
        <li className="list-group-item" key={todo.id}>{todo.title}</li>
      ))}
    </ul>
    </>
  )
}

export default TodoList