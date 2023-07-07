import cn from 'classnames'
import styles from './Characteristics.module.scss'
import { FC, useState } from 'react'
import {
  Button,
  CharacteristicTable,
  Container,
  DetailsDivProps,
  Title,
} from '@/shared'
import { Filter } from '@/features'
import { characteristics } from './conts'

interface CharacteristicsProps extends DetailsDivProps {}

export const Characteristics: FC<CharacteristicsProps> = ({ className }) => {
  return (
    <div className={styles.characteristics}>
      <Container className={styles.container}>
        <Title className={styles.title} tag="h2">
          Характиристики
        </Title>
        <div className={styles.box}>
          <div className={styles.left}>
            <Filter title="Размеры" />
            <Filter title="Спальное место" />
            <Filter title="Посадочное место" isShort />

            <Button className={styles.btn} appearance="ghost">
              <span>Наполнение посадочного места:</span> не зависимый пружынный
              блок
            </Button>
          </div>

          <div>
            <CharacteristicTable characteristics={characteristics} />
          </div>
        </div>
      </Container>
    </div>
  )
}
