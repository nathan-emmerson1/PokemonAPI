import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'
import PokemonList from './components/PokemonList.tsx'
import PokemonDetail from './components/PokemonDetail.tsx'
import GenerationList from './components/GenerationList.tsx'


export const routes = createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route index element={<GenerationList />} />
    <Route path="generation/:generationId" element={<PokemonList />} />
    <Route path="pokemon/:name" element={<PokemonDetail />} />
  </Route>,
)