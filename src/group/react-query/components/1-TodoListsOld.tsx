import axios, { CanceledError } from "axios"
import { useEffect, useState } from "react"

/**
 * * Problems with making traditional/old API requests
 * ? No separation of concern
 * ? No request cancellation
 * ? No automatic refresh
 * ? No caching
 */

interface Todos {
    id:number;
    title:string;
    completed:boolean;
}

const TodoLists = () => {
    const[todos, setTodos] = useState<Todos[]>([])
    const[errors, setErrors] = useState()

    useEffect(() => {
        async function getTodos(){
            try {
                const response = (await axios.get<Todos[]>('https://jsonplaceholder.typicode.com/todos')).data;
                setTodos(response)
            }
            catch(error:any){
                setErrors(error.message)
            }
        }
        getTodos();
    }, [])

  return (
  <>
  {errors && <p>{errors}</p>}
    {todos.map((todo)=>(
        <div key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            <span>{todo.title}</span>
        </div>
    ))}
    </>
  )
}

export default TodoLists