import { useState } from "react"
import usePagination from "../hooks/usePagination";

const Pagination = () => {

    const pageSize = 10;
    const [page, setPage] = useState(1)

const {data:posts, isLoading, error} = usePagination({page,pageSize})

if (isLoading) return <p>Loading...</p>
if (error) return <p>{error.message}</p>

  return (
  <>


    <ul className="list-group">
        {posts?.map((post)=>(
            <li className="list-group-item" key={post.id}>{post.title}</li>
        ))}
        </ul>
        <button onClick={()=>setPage(page - 1)} disabled={page === 1} className="btn btn-primary my-3 me-1">Previous</button>
        <button onClick={()=>setPage(page + 1)} className="btn btn-primary my-3">Next</button>
    </>
)}

export default Pagination;