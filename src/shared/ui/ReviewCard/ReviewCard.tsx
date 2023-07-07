import { DetailsDivProps, Rating } from '@/shared'
import { FC } from 'react'
import styles from './ReviewCard.module.scss'
import cn from 'classnames'
import { IReviews } from '@/widgets/Reviews/consts'
import Image from 'next/image'

interface ReviewCardProps extends DetailsDivProps {
  review: IReviews
}

export const ReviewCard: FC<ReviewCardProps> = ({ className, review }) => {
  return (
    <div className={cn(styles.reviewCard, className)}>
      <Image
        className={styles.img}
        src={review.avatar}
        alt="Avatar"
        width={280}
        height={280}
      />
      <span className={styles.name}>{review.user}</span>

      <div className={styles.ratingBox}>
        <Rating rating={review.rating} />
        <span className={styles.ratingValue}>{review.rating} / 5</span>
      </div>
    </div>
  )
}
