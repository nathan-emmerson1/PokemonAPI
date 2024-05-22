import { fetchPokemonGeneration } from '../apis/pokemon.ts'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from './LoadingSpinner.tsx'
import { Link, useParams } from 'react-router-dom'

export default function PokemonList() {
  const { generationId } = useParams()
  if (generationId == undefined) {
    throw new Error(`No generation parameter`)
  }

  const {
    data: generation,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['pokemon', generationId],
    queryFn: () => fetchPokemonGeneration(generationId),
  })

  if (isPending) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  return (
    <>
      <h2>Pokémon in {generation?.main_region.name}:</h2>
      <ul>
        {generation?.pokemon_species.map((p) => (
          <li key={p.url}>
            <Link to={`/pokemon/${p.name.toLowerCase()}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}