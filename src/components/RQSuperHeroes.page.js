import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

/*
Let's talk about the options that goes as 3rd param of useQuery.

## cacheTime --> It caches the data for certain times, so that it doesn't refetch the data when loading. The default value is 5 minutes.

## staleTime --> It doesn't refetch the data for certain times (If cacheTime is activated, it will refetch in the background though, but if staleTime is activated, it won't refetch for certain time), so that it doesn't refetch the data when loading. The default value is 0 second.

## refetchOnMount --> It refetches the data when the component is mounted. The default value is true. The options are: false, true, 'always'.
if true -> It will refresh the data when the component is mounted and only refresh when staleTime is finished.
if false -> It won't refresh the data when the component is mounted.
if 'always' -> It will refresh the data when the component is mounted and doesn't look at staleTime is activated or not.

## refetchOnWindowFocus --> It refetches the data when the window is focused. The default value is true, it enables the power to refetch data if tha data is changed in the backend.
The options for refetchOnWindowFocus is the same as refetchOnMount.

## refetchInterval --> It refetches the data every certain time. The default value is 0 second. It stops works when it looses its focus. It continue to refetch when refetchIntervalInBackground is set to true.

## refetchIntervalInBackground --> It enables refetchInverval to refetch even in the background. Options are: true, false. The default value is false.
 */

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error } = useQuery(
    'super-heroes',
    () => axios.get('http://localhost:4000/superheroes'),
    {
      cacheTime: 10 * 1000 * 60,
      staleTime: 30 * 1000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchInterval: 2 * 1000,
      refetchIntervalInBackground: true
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
