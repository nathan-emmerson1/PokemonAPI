import request from 'superagent'
import type { Pokemon, PokemonGeneration } from '../../models/pokemon.ts'

export async function fetchPokemonGeneration(
  generation: number
): Promise<PokemonGeneration> {
  const res = await request.get(
    `https://pokeapi.co/api/v2/generation/${generation}`
  )

  return res.body.generation
}

export async function fetchPokemonByName(name: string): Promise<Pokemon> {
  const res = await request.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return res.body.pokemon
}
