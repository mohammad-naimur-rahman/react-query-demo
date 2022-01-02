import axios from 'axios'
import { useQuery } from 'react-query'

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(
    'super-heroes',
    () => axios.get('http://localhost:4000/superheroes'),
    {
      cacheTime: 10 * 1000 * 60,
      staleTime: 30 * 1000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchInterval: 2 * 1000,
      refetchIntervalInBackground: true,
      enabled: false,
      onSuccess: onSuccess,
      onError: onError
      // select: data => {
      //   const superHeroNames = data.data.map(hero => hero.name)
      //   return superHeroNames
      // }
    }
  )
}
