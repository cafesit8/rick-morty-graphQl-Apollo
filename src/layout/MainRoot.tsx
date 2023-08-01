import { Outlet } from 'react-router-dom'

export default function MainRoot () {
  return (
    <main className='w-full h-screen flex items-center justify-center flex-col'>
      <section className='w-[95%] lg:w-[1000px] h-[90vh] bg-black/60 text-white flex flex-col gap-3 rounded-md p-3'>
        <h1 className="text-center md:text-2xl text-[20px] font-semibold">Rick and Morty</h1>
        <Outlet />
      </section>
    </main>
  )
}
