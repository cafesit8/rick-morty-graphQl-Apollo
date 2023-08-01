import { useContext } from 'react'
import Card from './Card'
import { ContextCharacter } from '../context/Context'
import { Character } from '../types'
import CharactersLoading from './loader/CharactersLoading'

export default function Characters () {
  const { loading, error, characterFound, loadingFind } = useContext(ContextCharacter)
  if (loading || loadingFind) return <CharactersLoading />
  if (error) {
    console.log(error)
  }
  return (
    <section className='w-full h-full overflow-y-scroll'>
      <div className='grid md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 w-full'>
        {characterFound?.characters.results.map((character: Character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </section>
  )
}
