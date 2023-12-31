import { Container, DetailsDivProps, Title } from '@/shared'
import { FC } from 'react'
import styles from './Model3D.module.scss'
import cn from 'classnames'
import { Slider } from '@/features'
import { modelThreeD, slidesPerView } from './consts'

interface model3DProps extends DetailsDivProps {}

export const Model3D: FC<model3DProps> = ({ className }) => {
  return (
    <section className={cn(styles.model3D, className)}>
      <Container>
        <Title className={styles.title}>Посмотри 3D модель</Title>
        <span className={styles.caption}>
          Мы разработали для вас <span>3D модель</span> Некоторых товаров чтобы
          вы могли посмотреть как ваша модель впишется в интерьер
        </span>
        <Slider models={modelThreeD} slidesPerView={slidesPerView} />
      </Container>
    </section>
  )
}
