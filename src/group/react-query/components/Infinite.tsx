import React, { Fragment } from 'react'
import useInfinite from '../hooks/useInfinite';

const Infinite = () => {
    const pageSize = 10;
    const {data, fetchNextPage, isFetchingNextPage} = useInfinite({pageSize})
  return (
    <>
      <ul className='list-group m-4'>
        {data?.pages.map((page, index)=>
        <Fragment key={index}>
          {page.map(post=><li className='list-group-item' key={post.id}>{post.title}</li>)}
        </Fragment>)}
      </ul>
      <button disabled={isFetchingNextPage} onClick={()=>fetchNextPage()} className="btn btn-primary ms-3">
        {isFetchingNextPage?"Loading":"Load More"}
      </button>
    </>
  )
}

export default Infinite;
