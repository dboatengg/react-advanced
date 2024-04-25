import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Posts {
    id:number;
    title:string;
    body:string
}

const usePosts = (userId:number | undefined) => {

const getPosts = async() =>{
    const response = await axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts',{params:{userId}})
    return response.data
}

return useQuery<Posts[], Error>({
    queryKey:userId ? ['users', userId ,'posts'] : ['posts'],
    queryFn:getPosts,
    staleTime: 6 * 60 * 60 * 1000 // 6 hours in milliseconds
})}

export default usePosts;
