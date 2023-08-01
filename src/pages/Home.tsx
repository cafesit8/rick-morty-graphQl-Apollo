import Characters from '../components/Characters'
import Header from '../components/Header'

export default function Home () {
  return (
    <div className='flex flex-col gap-3 h-[calc(100vh-170px)]'>
      <Header />
      <Characters />
    </div>
  )
}
