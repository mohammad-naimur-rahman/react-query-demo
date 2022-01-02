import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

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
