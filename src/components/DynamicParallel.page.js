import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'

const DynamicParallelPpage = () => {
  const queryResults = useQueries(
    [1, 3].map(id => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => axios.get(`http://localhost:4000/superheroes/${id}`)
      }
    })
  )

  queryResults.forEach(el => {
    console.log(el?.data?.data)
  })
  return (
    <div>
      <h1>Dynamic Parallel Queries</h1>
      {queryResults.map(el => {
        return (
          <div key={el.queryKey}>
            <h2>{el.queryKey}</h2>
            <p>{el.data?.data?.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default DynamicParallelPpage
