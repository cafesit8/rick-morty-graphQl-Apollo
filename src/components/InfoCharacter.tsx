import { Data } from '../types'

interface InfoCharacterProps {
  data: Data
  formatDate: (date: string) => string
  number: number
}

export default function InfoCharacter ({ data, formatDate, number }: InfoCharacterProps) {
  return (
    <div className={`${number === 0 ? 'h-full flex-col w-full overflow-y-scroll' : 'h-[40%] flex-row-reverse'} w-full md:h-3/6 flex gap-3 md:flex-row`}>
      <picture className={`${number === 0 ? 'w-full' : 'w-2/6'} self-start md:self-auto`}>
        <img className='w-full h-full md:object-cover object-contain' src={data?.character.image} alt={`image of ${data?.character.name}`} />
      </picture>
      <article className={`${number === 0 ? 'w-full' : 'w-4/6 overflow-y-scroll'} md:overflow-auto`}>
        <h1 className='font-semibold text-2xl'>{data?.character.name}</h1>
        <p className='md:text-[16px] text-[13px]'><span className='text-white/90'>Gender: </span>{data?.character.gender}</p>
        <p className='md:text-[16px] text-[13px]'><span className='text-white/90'>Species: </span>{data?.character.species}</p>
        <p className='md:text-[16px] text-[13px]'><span className='text-white/90'>Status: </span>{data?.character.status}</p>
        <p className='md:text-[16px] text-[13px]'><span className='text-white/90'>Location Created: </span>{formatDate(data?.character.location.created)}</p>
        <p className='md:text-[16px] text-[13px]'><span className='text-white/90'>Location Dimension: </span>{data?.character.location.dimension}</p>
        <p className='md:text-[16px] text-[13px]'><span className='text-white/90'>Location Name: </span>{data?.character.location.name}</p>
        <p className='md:text-[16px] text-[13px]'><span className='text-white/90'>Origin Created: </span>{formatDate(data?.character.origin.created)}</p>
        <p className='md:text-[16px] text-[13px]'><span className='text-white/90'>Origin Name: </span>{data?.character.origin.name}</p>
        <p className='md:text-[16px] text-[13px]'><span className='text-white/90'>Origin Dimension: </span>{data?.character.origin.dimension || 'no especificated'}</p>
        <p className='md:text-[16px] text-[13px]'><span className='text-white/90'>Origin Type: </span>{data?.character.origin.type || 'no especificated'}</p>
      </article>
    </div>
  )
}
