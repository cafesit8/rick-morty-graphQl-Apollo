import { useContext } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { ContextCharacter } from '../context/Context'
import { BsSearch } from 'react-icons/bs'

export default function Header () {
  const { previousPage, nextPage, setWord, characterFound, data } = useContext(ContextCharacter)
  const hanldeSubmit = (e: any) => {
    e.preventDefault()
    setWord(e.target.name.value.trim())
  }
  return (
    <div className='w-full flex flex-col items-center justify-between sm:flex-row sm:gap-0 gap-3'>
      <form onSubmit={hanldeSubmit} className='sm:w-[350px] w-full h-[32px] flex gap-2 items-center'>
        <input name='name' className='w-5/6 h-full px-2 text-black outline-none rounded-sm' type="text" placeholder="Morty" />
        <button className='w-1/6 h-full bg-[#ca36ed] rounded-sm grid place-content-center'><BsSearch /></button>
      </form>
      <article className='flex gap-5 sm:w-[86px] sm:justify-normal w-full justify-between items-center'>
        <button disabled={JSON.stringify(characterFound) !== JSON.stringify(data)} onClick={previousPage} className={`${JSON.stringify(characterFound) !== JSON.stringify(data) ? 'bg-[#a87bb3] opacity-60' : 'bg-[#ca36ed]'} p-2 rounded-full`}>
          <AiOutlineArrowLeft />
        </button>
        <button disabled={JSON.stringify(characterFound) !== JSON.stringify(data)} onClick={nextPage} className={`${JSON.stringify(characterFound) !== JSON.stringify(data) ? 'bg-[#a87bb3] opacity-60' : 'bg-[#ca36ed]'} p-2 rounded-full`}>
          <AiOutlineArrowRight />
        </button>
      </article>
    </div>
  )
}
