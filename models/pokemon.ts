export interface PokemonGeneration {
  id: number
  main_region: ApiLink
  moves?: ApiLink[]
  name: string
  names?: Name[]
  pokemon_species: ApiLink[]
  types?: ApiLink[]
  version_groups?: ApiLink[]
}

export interface Name {
  language: ApiLink
  name: string
}

export interface ApiLink {
  name: string
  url: string
}

export interface GenerationList {
  count: number
  next: string | null
  previous: string | null
  results: ApiLink[]
}

export interface HeldItem {
  item: Item
  version_details: VersionDetail[]
}

export interface Item {
  name: string
  url: string
}

export interface Stat {
  base_stat: number
  effort: number
  stat: StatClass
}

export interface StatClass {
  name: string
  url: string
}

export interface VersionDetail {
  rarity: number
  version: Item
}

export interface Pokemon {
  name: string
  id: number
  cries: Record<string, string>
  sprites: {
    front_default: string
    back_default: string
    front_shiny?: string
  }
  abilities: Array<Ability>
  moves: Array<Move>
  types: Array<TypeInfo>
  held_items: HeldItem[]
  stats: Stat[]
}

interface Ability {
  ability: { name: string; url: string }
  is_hidden: boolean
  slot: number
}

interface Move {
  move: { name: string; url: string }
}

interface TypeInfo {
  slot: number
  type: { name: string; url: string }
}

export interface SearchResults {
  results: Result[]
}

export interface Result {
  name: string
  url: string
}