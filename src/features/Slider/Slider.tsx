import { DetailsDivProps, ReviewCard } from '@/shared'
import { FC } from 'react'
import styles from './Slider.module.scss'
import cn from 'classnames'
import { IReviews } from '@/widgets/Reviews/consts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Scrollbar, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

interface SliderProps extends DetailsDivProps {
  reviews: IReviews[]
}

export const Slider: FC<SliderProps> = ({ className, reviews }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      scrollbar
      pagination={{
        type: 'fraction',
      }}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
