import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import MainLoading from './components/loader/MainLoading'
const Home = lazy(() => import('./pages/Home'))
const Root = lazy(() => import('./layout/MainRoot'))
const Character = lazy(() => import('./pages/Character'))

function App () {
  return (
    <Suspense fallback={<MainLoading />}>
      <Routes>
        <Route element={<Root />}>
          <Route path='/rick-morty-graphQl-Apollo' element={<Home />} />
          <Route path='/rick-morty-graphQl-Apollo/:id' element={<Character />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
