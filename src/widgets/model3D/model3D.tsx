import { Container, DetailsDivProps, Title } from '@/shared'
import { FC } from 'react'
import styles from './model3D.module.scss'
import cn from 'classnames'
import { Slider } from '@/features'
import { modelThreeD, slidesPerView } from './consts'

interface model3DProps extends DetailsDivProps {}

export const Model3D: FC<model3DProps> = ({ className }) => {
  return (
    <section className={cn(styles.model3D, className)}>
      <Container>
        <Title>Посмотри 3D модель</Title>
        <Slider models={modelThreeD} slidesPerView={slidesPerView} />
      </Container>
    </section>
  )
}
