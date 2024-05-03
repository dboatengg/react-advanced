import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRef } from "react"
import { Todo } from "./hook/useTodo"
import axios from "axios"

const TodoForm = () => {
  const queryClient = useQueryClient();

  const inputRef = useRef<HTMLInputElement>(null)

  const addTodo = useMutation({
    mutationFn: (todo:Todo) => axios
    .post('https://jsonplaceholder.typicode.com/todos',todo)
    .then(res=>res.data),

    onSuccess:(savedTodo, newTodo) =>{
      console.log(savedTodo)
      queryClient.setQueryData<Todo[]>(['todos'], todos=>[savedTodo, ...(todos || [])])
    }
    }
  )

  const onsubmit =(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const value = inputRef.current?.value;
    // if(value){
    //   console.log(inputRef.current?.value)
    //   inputRef.current.value = ""
    // }

    if(inputRef.current && inputRef.current.value)
      addTodo.mutate({
        id:0,
        title: inputRef.current?.value,
        completed: false,
        userId: 1
      })

    }

  return (
    <form className="row mb-3" onSubmit={onsubmit}>
        <div className="col"><input ref={inputRef} type="text" className="form-control"/></div>
        <div className="col"><button className="btn btn-primary">Add</button></div>
    </form>
  )
}

export default TodoForm