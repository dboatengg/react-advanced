import useTodos from "../hooks/useTodos";


const TodoListsRQ = () => {
    const {data:todos,isLoading, error} = useTodos()

  return (
  <>
  {isLoading && <p>loading...</p>}
  {error && <p>{error.message}</p>}
    {todos?.map((todo)=>(
        <div key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            <span>{todo.title}</span>
        </div>
    ))}
    </>
  )
}
export default TodoListsRQ;