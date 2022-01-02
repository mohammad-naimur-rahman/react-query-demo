import { useState, useEffect } from 'react'
import axios from 'axios'

const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const res = await axios.get('http://localhost:4000/superheroes')
      setData(res.data)
      setIsLoading(false)
    })()
  }, [])

  return (
    <>
      <h2>Super Heroes Page</h2>
      {isLoading && <h2>Loading...</h2>}
      {data.map(hero => {
        return <div key={hero.id}>{hero.name}</div>
      })}
    </>
  )
}

export default SuperHeroesPage