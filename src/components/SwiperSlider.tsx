import { Suspense } from 'react'
import { Resident } from '../types'

interface Props {
  character: Resident
}

export default function SwiperSlider ({ character }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <picture className='h-[80%] block'>
        <img className='w-full h-full object-cover' src={character.image} alt={`image of ${character.name}`} />
      </picture>
      <article className='h-[20%] flex items-center'>
        <h6>{character.name}</h6>
      </article>
    </Suspense>
  )
}
