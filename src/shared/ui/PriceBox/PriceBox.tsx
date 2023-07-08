import { DetailsDivProps } from '@/shared'
import { FC } from 'react'
import styles from './PriceBox.module.scss'
import cn from 'classnames'
import { priceRu } from '@/helpers'

interface PriceBoxProps extends DetailsDivProps {
  price: number
}

export const PriceBox: FC<PriceBoxProps> = ({ className, price }) => {
  return (
    <div className={cn(styles.priceBox, className)}>
      <span className={styles.price}>{priceRu(price)}</span>
      <span className={styles.prevPrice}>{priceRu(price)}</span>
      <span className={styles.discount}>-10 %</span>
    </div>
  )
}
