import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Posts {
    id:number;
    title:string;
    body:string
}

interface PostQuery {
    page:number;
    pageSize:number
}

const usePagination = (query:PostQuery) => {

const getPosts = async() =>{
    const response = await axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts',{
        params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize
        }
    })
    return response.data
}

return useQuery<Posts[], Error>({
    queryKey: ['posts', query],
    queryFn: getPosts, 
    // staleTime: 6 * 60 * 60 * 1000,
    // keepPreviousData: true,
})}

export default usePagination;
