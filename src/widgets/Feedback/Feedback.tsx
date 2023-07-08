import { Button, Container, DetailsDivProps, Title } from '@/shared'
import { FC } from 'react'
import styles from './Feedback.module.scss'
import cn from 'classnames'
import FeedbackImg from '/public/content/feedback.png'
import Image from 'next/image'

interface FeedbackProps extends DetailsDivProps {}

export const Feedback: FC<FeedbackProps> = ({ className }) => {
  return (
    <section className={cn(styles.feedback, className)}>
      <Container className={styles.container}>
        <Image
          className={styles.img}
          src={FeedbackImg}
          alt="Phone img"
          width={200}
          height={265}
        />

        <Title className={styles.title}>Нам важен ваш отзыв</Title>

        <Button className={styles.btn} appearance="primary">
          Оставить отзыв
        </Button>
      </Container>
    </section>
  )
}
