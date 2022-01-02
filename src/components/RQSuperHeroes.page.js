import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error } = useQuery(
    'super-heroes',
    () => axios.get('http://localhost:4000/superheroes'),
    {
      cacheTime: 10 * 1000 * 60, // In this time duration, it cache tha data and doesn't refetch when loading (Default: 5 mins)
      staleTime: 30 * 1000 // In this time duration, it won't refetch the data (Default: 0)
    }
  )

  return (
    <div>
      <h2>RQ Super Heroes Page</h2>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error: {error.message}</h2>}
      {data?.data.map(hero => {
        return <div key={hero.id}>{hero.name}</div>
      })}
    </div>
  )
}

export default RQSuperHeroes
