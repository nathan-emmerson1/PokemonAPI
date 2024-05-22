import { useParams } from 'react-router-dom'
import { fetchPokemonByName } from '../apis/pokemon.ts'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from './LoadingSpinner.tsx'

export default function PokemonDetail() {
  const { name } = useParams()
  if (name == undefined) {
    throw new Error()
  }

  const {
    data: pokemon,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['pokemon', name],
    staleTime: 1000,
    queryFn: () => fetchPokemonByName(name),
  })

  if (isPending) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <h1>{`Error incountered: ${error}`}</h1>
  }

  return (
    <div>
      <h1>{name}</h1>
      <h2>Types: </h2>
      {pokemon?.types.map(({ type, slot }) => <p key={slot}>{type.name}</p>)}
      <img
        src={pokemon?.sprites.front_default}
        alt={`Front Default Sprite for ${pokemon?.name}`}
      />
      <section>
        <h2>Abilities: </h2>
        {pokemon?.abilities.map(({ ability, slot }) => (
          <p key={slot}>{ability.name}</p>
        ))}
      </section>
      <section>
        <h2>Moves: </h2>
        {pokemon?.moves.map(({ move }) => <p key={move.name}>{move.name}</p>)}
      </section>
      <section>
        <h2>Sprites:</h2>
        <img src={pokemon?.sprites.front_default} alt="" />
      </section>
    </div>
  )
}