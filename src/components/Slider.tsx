import { Data, Resident } from '../types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import { lazy } from 'react'
const SwiperSlider = lazy(() => import('./SwiperSlider'))

interface Props {
  data: Data
}

export default function Slider ({ data }: Props) {
  return (
    <div className='w-full md:h-3/6 h-[60%] relative flex flex-col gap-3'>
      <h2 className='font-semibold'>List of Residents ({data?.character.origin.residents.length})</h2>
      <div className='w-full md:h-5/6 h-full'>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={20}
          freeMode={true}
          draggable={true}
          modules={[FreeMode]}
          className="mySwiper h-full"
        >
          {data?.character.origin.residents.map((character: Resident) => (
            <SwiperSlide key={character.image} className='p-2 rounded-md' style={{ width: '220px', border: 'solid 1px', height: '100%' }}>
              <SwiperSlider character={character} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
