import { Button } from '@/shared'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useSwiper } from 'swiper/react'
import { FC } from 'react'

interface SwiperNavBtnProps {
  direction: 'prev' | 'next'
}

export const SwiperNavBtn: FC<SwiperNavBtnProps> = ({ direction }) => {
  const swiper = useSwiper()

  return direction === 'prev' ? (
    <Button appearance="link" onClick={() => swiper.slidePrev()}>
      <BsArrowLeft />
    </Button>
  ) : (
    <Button appearance="link" onClick={() => swiper.slideNext()}>
      <BsArrowRight />
    </Button>
  )
}
