import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from './LoadingSpinner.tsx'
import { fetchPokemonByName } from '../apis/pokemon.ts'

export default function PokemonDetail() {
  const { name } = useParams()

  if (!name) throw new Error()

  const {
    isPending,
    isError,
    data: pokemon,
    error,
  } = useQuery({
    queryKey: ['pokemonInfo', name],
    queryFn: () => fetchPokemonByName(name),
  })

  if (isPending) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

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

      {pokemon.sprites.front_shiny !== undefined ? (
        <img
          src={pokemon.sprites.front_shiny}
          alt={`Front Default Sprite for ${pokemon.name}`}
        />
      ) : undefined}
      {Object.keys(pokemon.cries).map((key) => {
        const url = pokemon.cries[key]
        return (
          <audio key={key} src={url} controls>
            <track default kind="captions">
              The sound of a {pokemon.name}
            </track>
          </audio>
        )
      })}

      <section>
        <h2>Stats: </h2>
        {pokemon.stats.map(({ stat, base_stat }) => (
          <p key={stat.name}>
            {stat.name}: {base_stat}
          </p>
        ))}
      </section>
      <ol>
        {pokemon.held_items.map((held, idx) => {
          return <li key={idx}>{held.item.name}</li>
        })}
      </ol>
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