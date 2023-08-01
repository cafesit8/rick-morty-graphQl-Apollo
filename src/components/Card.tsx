import { Character } from '../types'
import { Link } from 'react-router-dom'

interface CardProps {
  character: Character
}

export default function Card ({ character }: CardProps) {
  return (
    <article className='border rounded-md overflow-hidden'>
      <picture className='w-full md:h-[80%] h-[70%] block'>
        <img className='w-full h-full object-cover' src={character.image} alt={`image of ${character.name}`} />
      </picture>
      <div className='w-full md:h-[20%] h-[30%] flex items-center justify-around px-1'>
        <h5 className='text-center md:text-[16px] text-[13px]'>{character.name}</h5>
        <Link to={`/${character.id}`} className='bg-[#8234c3] cursor-pointer px-4 rounded-md'>Info</Link>
      </div>
    </article>
  )
}
