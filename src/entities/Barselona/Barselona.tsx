'use client'
import styles from './Barselona.module.scss'
import cn from 'classnames'
import { FC } from 'react'
import { Button, Container, DetailsDivProps, Title } from '@/shared'
import Image from 'next/image'
import contentImg from '/public/content/barselona.png'

interface BarselonaProps extends DetailsDivProps {}

export const Barselona: FC<BarselonaProps> = ({ className }) => {
  return (
    <div className={styles.barselona}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <Title>Наша &laquo;Барселона&raquo;</Title>
          <Title tag="h3">Стильная и комфортабельная модель</Title>
          <Button className={styles.btn} appearance="ghost">
            Посмотреть
          </Button>
        </div>
        <div className={styles.right}>
          <Image
            className={styles.img}
            src={contentImg}
            width={800}
            height={300}
            alt="диван Барселона"
          />
        </div>
      </Container>
    </div>
  )
}
