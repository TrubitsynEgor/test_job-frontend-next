import { DetailsDivProps, IProductImage, ReviewCard } from '@/shared'
import { FC } from 'react'
import styles from './Slider.module.scss'
import { IReviews } from '@/widgets/Reviews/consts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { SwiperNavBtn } from './SliderNavBtn'
import Image from 'next/image'

type SlidesPerView = {
  mobile: number
  tablet: number
  desktop: number
}

interface SliderProps extends DetailsDivProps {
  reviews?: IReviews[]
  slidesPerView: SlidesPerView
  models?: IProductImage[]
}

export const Slider: FC<SliderProps> = ({ reviews, slidesPerView, models }) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          type: 'fraction',
        }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          600: {
            slidesPerView: slidesPerView.mobile,
          },
          768: {
            slidesPerView: slidesPerView.tablet,
          },

          980: {
            slidesPerView: slidesPerView.desktop,
          },
        }}
      >
        <div className={styles.sliderNav}>
          <SwiperNavBtn direction="prev" />
          <SwiperNavBtn direction="next" />
        </div>
        {reviews
          ? reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))
          : models?.map((model) => (
              <SwiperSlide className={styles.slide} key={model.id}>
                <Image
                  className={styles.modelImg}
                  width={600}
                  height={400}
                  src={model.path}
                  alt="3d image"
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  )
}
