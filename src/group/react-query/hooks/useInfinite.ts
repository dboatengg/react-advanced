import { useInfiniteQuery} from "@tanstack/react-query";
import axios, { all } from "axios";

interface Post {
    id:number,
    title:string
}

interface PostQuery {
    pageSize:number
}

const useInfinite = (query:PostQuery) => {

    const getPosts = async({PageParam = 1})=> {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _start:(PageParam - 1) * query.pageSize,
                _limit: query.pageSize
            }})
        return response.data;
    }

    return useInfiniteQuery({
        queryKey:['posts'],
        queryFn: getPosts,
        keepPreviousData:true,
        getNextPageParam: (lastPage,allPages)=>{
            return lastPage.length > 0 ? allPages.length + 1: undefined;
        }
    })
}

export default useInfinite;
