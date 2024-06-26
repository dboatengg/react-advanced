import { useState } from "react"
import usePosts from "../hooks/usePosts"

const PostsLists = () => {
    const[userId, setUserId] = useState<number>()

const {data:posts, isLoading, error} = usePosts(userId)

if (isLoading) return <p>Loading...</p>
if (error) return <p>{error.message}</p>

  return (
  <>
    <select 
    onChange={(event)=>{setUserId(parseInt(event.target.value))}} value={userId}
    className="form-select m-2">
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
    </select>

    <ul className="list-group">
        {posts?.map((post)=>(
            <li className="list-group-item" key={post.id}>{post.title}</li>
        ))}
        </ul>
    </>
)}

export default PostsLists;