import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import HomePage from './components/Home.page'
import RQSuperHeroesPage from './components/RQSuperHeroes.page'
import SuperHeroesPage from './components/SuperHeroes.page'
import './App.css'
import RQSuperHero from './components/RQSuperHero.page'
import ParallerlQueriesPage from './components/ParallerlQueries.page'
import DynamicParallelPpage from './components/DynamicParallel.page'
import DependentQueriesPage from './components/DependentQueries.page'
import PaginatedQueriesPage from './components/PaginatedQueries.page'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-parallel">RQ Parallel Queries</Link>
              </li>
              <li>
                <Link to="/rq-dynamic-parallel-query">
                  RQ Dynamic Parallel Queries
                </Link>
              </li>
              <li>
                <Link to="/rq-dependent-queries">Dependent Queries</Link>
              </li>
              <li>
                <Link to="/rq-paginated">Paginated Queries</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/rq-super-heroes/:id" element={<RQSuperHero />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/rq-parallel" element={<ParallerlQueriesPage />} />
            <Route
              path="/rq-dependent-queries"
              element={<DependentQueriesPage />}
            />
            <Route
              path="/rq-dynamic-parallel-query"
              element={<DynamicParallelPpage />}
            />
            <Route path="/rq-paginated" element={<PaginatedQueriesPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App
