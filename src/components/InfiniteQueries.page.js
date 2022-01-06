import axios from 'axios'
import React, { useState } from 'react'
import { useInfiniteQuery } from 'react-query'

const InfinitedQueriesPage = () => {
  const [pageParam, setpageParam] = useState(1)

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery(
    'colors',
    () => axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < 4) {
          return lastPage + 1
        } else {
          return undefined
        }
      }
    }
  )
  console.log(data)
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {/* {data?.pages.map(color => (
        <p key={color.id}>{color.name}</p>
      ))} */}
      {isFetching && <p>Loading...</p>}
      <button onClick={() => fetchNextPage()} disabled={hasNextPage}>
        Load More
      </button>
      {isFetching && !isFetchingNextPage & <p>Loading...</p>}
    </div>
  )
}

export default InfinitedQueriesPage
