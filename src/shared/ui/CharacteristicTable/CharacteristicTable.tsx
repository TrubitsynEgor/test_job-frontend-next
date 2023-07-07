import { FC } from 'react'
import styles from './CharacteristicTable.module.scss'
import { DetailsDivProps } from '@/shared/types'
import { ICharacteristic } from '@/widgets/Characteristics/conts'
import cn from 'classnames'

interface CharacteristicTableProps extends DetailsDivProps {
  characteristics: ICharacteristic
}

export const CharacteristicTable: FC<CharacteristicTableProps> = ({
  className,
  characteristics,
}) => {
  return (
    <div className={cn(className, styles.characteristicTable)}>
      <span>
        <span className={styles.bold}>Механизм трансформации:</span>
        {characteristics.transform}
      </span>
      <span>
        <span className={styles.bold}>Бельевой ящик:</span>
        {characteristics.linenBox}
      </span>
      <span>
        <span className={styles.bold}>Съемный чехол:</span>
        {characteristics.case}
      </span>
      <span>
        <span className={styles.bold}>Подушки:</span>
        {characteristics.pillows}
      </span>
      <span>
        <span className={styles.bold}>Опоры</span>
        {characteristics.supports}
      </span>
      <span>
        <span className={styles.bold}>Вариант доставки:</span>
        {characteristics.delivery}
      </span>
      <span>
        <span className={styles.bold}>Цвет:</span>
        {characteristics.color}
      </span>
      <span>
        <span className={styles.bold}>Каркас:</span>
        {characteristics.frame}
      </span>
      <span>
        <span className={styles.bold}>Наполнение подушек:</span>
        {characteristics.pillowsFiller}
      </span>
      <span>
        <span className={styles.bold}>Материал опор:</span>
        {characteristics.supportMaterial}
      </span>
      <span>
        <span className={styles.bold}>Ткань:</span>
        {characteristics.textile}
      </span>
      <span>
        <span className={styles.bold}>Страна:</span>
        {characteristics.country}
      </span>
      <span>
        <span className={styles.bold}>Бренд:</span>
        {characteristics.brand}
      </span>
    </div>
  )
}
