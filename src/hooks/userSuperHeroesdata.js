import { useMutation, useQuery, useQueryClient } from 'react-query'
import { v4 as uuid } from 'uuid'
import { request } from '../utils/axios-interceptor'

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(
    'super-heroes',
    //() => axios.get('http://localhost:4000/superheroes'),
    () => request({ url: '/superheroes' }),
    {
      // cacheTime: 10 * 1000 * 60,
      // staleTime: 30 * 1000,
      // refetchOnMount: true,
      // refetchOnWindowFocus: true,
      // refetchInterval: 2 * 1000,
      // refetchIntervalInBackground: true,
      // enabled: false,
      // onSuccess: onSuccess,
      // onError: onError
      // select: data => {
      //   const superHeroNames = data.data.map(hero => hero.name)
      //   return superHeroNames
      // }
    }
  )
}

export const useAddSuperHero = (name, alterEgo) => {
  const queryClient = useQueryClient()
  return useMutation(
    // () =>
    //   axios.post('http://localhost:4000/superheroes', {
    //     name,
    //     alterEgo,
    //     id: uuid()
    //   }),
    () =>
      request({
        url: '/superheroes',
        method: 'post',
        data: { name, alterEgo, id: uuid() }
      }),
    {
      // onSuccess: data => {
      //   //queryClient.invalidateQueries('super-heroes')
      //   queryClient.setQueryData('super-heroes', oldData => {
      //     return {
      //       ...oldData,
      //       data: [...oldData.data, data.data]
      //     }
      //   })
      // }
      onMutate: async newHero => {
        await queryClient.cancelQueries('super-heroes')
        const previousHeroData = queryClient.getQueryData('super-heroes')
        queryClient.setQueryData('super-heroes', oldQueryData => {
          return {
            ...oldQueryData,
            data: [...oldQueryData.data, newHero]
          }
        })
        return { previousHeroData }
      },
      onError: (_err, _newTodo, context) => {
        queryClient.setQueryData('super-heroes', context.previousHeroData)
      },
      onSettled: () => {
        queryClient.invalidateQueries('super-heroes')
      }
    }
  )
}
