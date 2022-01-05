import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const DependentQueriesPage = () => {
  const { data: user } = useQuery('fetch-user', () =>
    axios.get('http://localhost:4000/users/1')
  )
  const occupation = user?.data.occupation

  const { data: jobs } = useQuery(
    'fetch-jobs',
    () => axios.get(`http://localhost:4000/works/${occupation}`),
    {
      enabled: !!occupation
    }
  )

  const allJobs = jobs?.data.jobs

  return (
    <div>
      <h2>All Jobs</h2>
      {!!allJobs && allJobs.map(job => <p key={job}>{job}</p>)}
    </div>
  )
}

export default DependentQueriesPage
