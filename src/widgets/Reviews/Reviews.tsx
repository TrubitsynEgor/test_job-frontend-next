import { Container, DetailsDivProps } from '@/shared'
import { FC } from 'react'
import styles from './Reviews.module.scss'
import cn from 'classnames'
import { Slider } from '@/features'
import { reviews } from './consts'

interface ReviewsProps extends DetailsDivProps {}

export const Reviews: FC<ReviewsProps> = ({ className }) => {
  return (
    <div className={cn(styles.reviews, className)}>
      <Container>
        <Slider reviews={reviews} />
      </Container>
    </div>
  )
}
