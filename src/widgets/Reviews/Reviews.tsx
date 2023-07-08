import { Container, DetailsDivProps, Title } from '@/shared'
import { FC } from 'react'
import styles from './Reviews.module.scss'
import cn from 'classnames'
import { Slider } from '@/features'
import { reviews, slidesPerView } from './consts'

interface ReviewsProps extends DetailsDivProps {}

export const Reviews: FC<ReviewsProps> = ({ className }) => {
  return (
    <section className={cn(styles.reviews, className)}>
      <Container>
        <Title>Отзывы</Title>
        <Slider reviews={reviews} slidesPerView={slidesPerView} />
      </Container>
    </section>
  )
}
