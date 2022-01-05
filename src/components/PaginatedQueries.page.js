import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

const PaginatedQueriesPage = () => {
  const [pageNum, setpageNum] = useState(1)
  const [page, setpage] = useState(1)

  const changePage = e => {
    e.preventDefault()
    setpageNum(page)
  }

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ['colors', pageNum],
    () => axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNum}`),
    {
      keepPreviousData: true
    }
  )
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {data?.data.map(color => (
        <p key={color.id}>{color.name}</p>
      ))}
      {isFetching && <p>Loading...</p>}
      <form onSubmit={changePage}>
        <input
          value={page}
          onChange={e => setpage(e.target.value)}
          placeholder="Input page number"
        />
      </form>
    </div>
  )
}

export default PaginatedQueriesPage
