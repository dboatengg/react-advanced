import { useQuery } from "@tanstack/react-query";
import axios from "axios"

interface Todos {
    id:number;
    title:string;
    completed:boolean;
}

const useTodos = () => {
    const fetchData = async()=>{
        const response = await axios.get<Todos[]>('https://xjsonplaceholder.typicode.com/todos')
        return response.data
    }

  return useQuery<Todos[], Error>({
    queryKey:['todos'],
    queryFn: fetchData,
    staleTime: 10 * 1000
})}

export default useTodos