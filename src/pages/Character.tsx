import { useParams } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { CHARACTER_SELECTED } from '../querys/index'
import { useEffect } from 'react'
import InfoCharacter from '../components/InfoCharacter'
import Slider from '../components/Slider'
import CharacterInfoLoading from '../components/loader/CharacterInfoLoading'

export default function Character () {
  const { id } = useParams()
  const [getCharacter, { data, loading, error }] = useLazyQuery(CHARACTER_SELECTED)
  useEffect(() => {
    getCharacter({ variables: { id } })
  }, [id])
  if (loading) return <CharacterInfoLoading />
  if (error) {
    console.log(error)
  }

  function formatDate (dateString: string) {
    const date = new Date(dateString)
    const options: any = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
    return date.toLocaleDateString('es-PE', options)
  }
  return (
    <section className='w-full h-[calc(100vh-120px)] p-2 flex flex-col gap-3'>
      <InfoCharacter data={data} formatDate={formatDate} number={data?.character.origin.residents.length}/>
      {data?.character.origin.residents.length !== 0 && <Slider data={data} />}
    </section>
  )
}
