"testing"
import request from 'superagent'
import type {
  GenerationList,
  Pokemon,
  PokemonGeneration,
  SearchResults,
} from '../../models/pokemon.ts'

export async function fetchGenerationList(): Promise<GenerationList> {
  const res = await request.get('https://pokeapi.co/api/v2/generation/')
  return res.body
}

export async function fetchPokemonGeneration(
  generation: string | number,
): Promise<PokemonGeneration> {
  const res = await request.get(
    `https://pokeapi.co/api/v2/generation/${generation}`,
  )

  return res.body
}

export async function fetchPokemonByName(name: string): Promise<Pokemon> {
  const res = await request.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return res.body
}

export async function fetchAllPokemonSpecies(): Promise<SearchResults> {
  const res = await request
    .get('https://pokeapi.co/api/v2/pokemon-species')
    .query({ limit: 9000 })

  return res.body
}