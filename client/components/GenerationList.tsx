import { fetchGenerationList } from '../apis/pokemon.ts'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from './LoadingSpinner.tsx'
import { Link } from 'react-router-dom'

export default function GenerationList() {
  const {
    data: something,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['generations'],
    queryFn: fetchGenerationList,
  })

  if (isPending) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <p>Oops! {`${error}`}</p>
  }

  return (
    <div>
      <ol>
        {something?.results.map((item) => (
          <li key={item.url}>
            <Link to={`/generation/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}