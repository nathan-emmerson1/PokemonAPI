import { useParams } from 'react-router-dom'
import { fetchPokemonByName } from '../apis/pokemon.ts'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from './LoadingSpinner.tsx'
import { query } from 'express'

export default function PokemonDetail() {
  const { name } = useParams()
  if (name === undefined) {
    throw error
  }

  const {
    data: pokemon,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['pokemon'],
    queryFn: () => fetchPokemonByName(name),
  })

  if (isPending) return <LoadingSpinner />

  if (isError) throw new Error

  return (
    <div>
      <h1>{name}</h1>
      <h2>Types: </h2>
      {pokemon.types.map(({ type, slot }) => (
        <p key={slot}>{type.name}</p>
      ))}
      <img
        src={pokemon.sprites.front_default}
        alt={`Front Default Sprite for ${pokemon.name}`}
      />
      <section>
        <h2>Abilities: </h2>
        {pokemon.abilities.map(({ ability, slot }) => (
          <p key={slot}>{ability.name}</p>
        ))}
      </section>
      <section>
        <h2>Moves: </h2>
        {pokemon.moves.map(({ move }) => (
          <p key={move.name}>{move.name}</p>
        ))}
      </section>
    </div>
  )
}
