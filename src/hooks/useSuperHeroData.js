import axios from 'axios'
import { useQuery } from 'react-query'

export const useSuperHeroeData = id => {
  return useQuery(['super-hero', id], () =>
    axios.get(`http://localhost:4000/superheroes/${id}`)
  )
}
