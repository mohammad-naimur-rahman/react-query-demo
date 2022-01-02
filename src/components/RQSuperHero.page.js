import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroeData } from '../hooks/useSuperHeroData'

const RQSuperHero = () => {
  const { id } = useParams()

  const { isLoading, isFetching, data, isError, error } = useSuperHeroeData(id)
  return (
    <div>
      {(isLoading || isFetching) && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      <h1>
        {data?.data.name} - {data?.data.alterEgo}
      </h1>
    </div>
  )
}

export default RQSuperHero
