# Query 'Em All Workshop

## Setup

### Cloning and Installation
- [ ] Clone this repo, navigate to it, install packages, and start the server with `npm run dev`

---

### Looking Around

`client/apis/pokemon.ts` and `server/routes/pokemon.ts` are written for you! Take a look at them and then try them out in Insomnia (or Thunder Client) to see what they return. The types are also written for you in `models/pokemon.ts`, they only contain the fields we are interested in.

`<App>` is rendering two client-side routes, `/` and `/pokemon/:name`:
  - `/` renders `<PokemonList>`, a list of hardcoded Pokémon
  - `/pokemon/:name` renders `<PokemonDetail>`, a single Pokémon (with lots more information), also hardcoded

Visit [localhost:5173/](http://localhost:5173/) and [localhost:5173/pokemon/bulbasaur](http://localhost:5173/pokemon/bulbasaur), Bulbasaur is currently our only resident Pokémon. We will be replacing the hardcoded data with data from the API.

---

### Setting up React Query

- [ ] Install React Query and React Query Devtools

- [ ] In `client/index.tsx` import `{ QueryClient, QueryClientProvider }` from `@tanstack/react-query`

- [ ] In `client/index.tsx` import `{ ReactQueryDevTools }` from `@tanstack/react-query-devtools`

- [ ] Create a new `QueryClient` instance and wrap the `<RouterProvider />` component in a `<QueryClientProvider>` component, passing the `QueryClient` instance as a prop

- [ ] Within the `QueryClient` instance, add in the `<ReactQueryDevTools />` component.

---

## Workshop Time!

### 1. Fetching a List of Pokémon from the API

- [ ] As a user, I want to see a list of the first generation of Pokémon so that I can see what Pokémon there are

  - In `<PokemonList>`, use `useQuery` and `fetchPokemonGeneration` to render a list of Pokémon (just the names)
  
<details style="padding-left: 2em">
    <summary> STOP! and find another pair</summary>
    
    - After attempting this stage, stop and find another pair who has reached the same stage. 
      Share your solutions and discuss any challenges faced.
</details>

---

### 2. Adding a Loading State

- [ ] As a user, I want to see a loading state while the list of Pokémon is being fetched so that I know something is happening

<details style="padding-left: 2em">
    <summary> STOP! and find another pair</summary>    
    - After implementing the loading state, stop and find another pair who has reached the same stage. 
  Share your solutions and discuss any challenges faced.
</details>

---

### 3. Adding an Error State

- [ ] As a user, if something goes wrong while fetching the list of Pokémon, I want to see an error state so that I know something went wrong

<details style="padding-left: 2em">
    <summary> STOP! and find another pair</summary>
  
    - After implementing the error state, stop and find another pair who has reached the same stage. Share your solutions and discuss any challenges faced.
</details>

---

### 4. Fetching a Single Pokémon

- [ ] As a user, when I click on a Pokémon in the list, I want to see more information about that Pokémon so that I can learn more about it

  - In `<PokemonList>`, add a `<Link>` to each Pokémon that links to `/pokemon/:name`, where `:name` is the name of the Pokémon, note: the URL should be the lowercase name of the Pokémon (e.g. `/pokemon/bulbasaur`)
  - In `<PokemonDetail>`, use `useQuery` and `fetchPokemon` to render the Pokémon's name, image, and types

<details style="padding-left: 2em">
    <summary> STOP! and find another pair</summary>
  
    - After implementing the Pokémon detail fetching, stop and find another pair who has reached the same stage. Share your solutions and discuss any challenges faced.
</details>

---

### 5. Adding More Data to `<PokemonDetail>`

- [ ] As a user, I want to see more information about the Pokémon so that I can learn more about it
  - In `<PokemonDetail>`, use `console.log` to see what the _actual_ API is returning
  - Choose some fields and add them to the `Pokemon` type in `models/pokemon.ts`
  - In `<PokemonDetail>`, render those new fields in some way of your choosing

<details style="padding-left: 2em">
    <summary> STOP! and find another pair</summary>
  
    - After adding more data to the Pokémon detail, stop and find another pair who has reached the same stage. Share your solutions and discuss any challenges faced.
</details>

## Stretch

- [ ] As a user, on the homepage (`/`) I want to see a list of all the generations, so that I can click on one, go to `/generations/:generationId` and see the list of Pokémon for that generation

- [ ] As a user, I want to see a search bar at the top of the page, so that I can search for a Pokémon by name, when I hit enter, I want to be taken to `/search?name=pokemonName`, which should display a filtered list of Pokémon

---

[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=query-em-all)