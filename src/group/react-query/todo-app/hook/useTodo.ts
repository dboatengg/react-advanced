import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface Todo {
    id:number
    title:string
    completed:boolean
    userId:number
}

const useTodo = () => {
    const getTodos = async() => {
        const response = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        return response.data;
    }

  return useQuery({
      queryKey:['todos'],
      queryFn:getTodos,
  })
}

export default useTodo;
