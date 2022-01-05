import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

/*
Let's now talk about parallel fetching.

If you want to fetch data from multiple data source at once, you can use parallel queries. But one problem with this approach is in both of the query methods, you have a common object for data sources, that is called 'data', but you can easily solve this by using alias for different data object, that's pretty much it.
*/

const ParallerlQueriesPage = () => {
  const { data: superHeroes } = useQuery('parallel-queries-superheroes', () =>
    axios.get('http://localhost:4000/superheroes')
  )
  const { data: friends } = useQuery('parallel-queries-friends', () =>
    axios.get('http://localhost:4000/friends')
  )
  return (
    <div>
      <h2>Heroes</h2>
      {superHeroes?.data.map(hero => (
        <p key={hero.id}>{hero.name}</p>
      ))}
      <h2>Friends</h2>
      {friends?.data.map(friend => (
        <p key={friend.id}>{friend.name}</p>
      ))}
    </div>
  )
}

export default ParallerlQueriesPage
