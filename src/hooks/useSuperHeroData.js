import axios from 'axios'
import { useQuery, useQueryClient } from 'react-query'

export const useSuperHeroeData = id => {
  const queryClient = useQueryClient()
  return useQuery(
    ['super-hero', id],
    () => axios.get(`http://localhost:4000/superheroes/${id}`),
    {
      initialData: () => {
        const hero = queryClient
          .getQueryData('super-hero')
          ?.data?.find(hero => hero.id === id)

        if (hero) {
          return {
            data: hero
          }
        } else {
          return undefined
        }
      }
    }
  )
}
