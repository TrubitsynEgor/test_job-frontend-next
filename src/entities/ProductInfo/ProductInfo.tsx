import { ColorPicker, DetailsDivProps, IColor, Rating, Title } from '@/shared'
import cn from 'classnames'
import styles from './ProductInfo.module.scss'
import { FC, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { priceRu } from '@/helpers'

interface ProductInfoProps extends DetailsDivProps {
  price: number
  colors: IColor[]
}

export const ProductInfo: FC<ProductInfoProps> = ({
  className,
  price,
  colors,
}) => {
  const [rating, setRating] = useState(0)
  const params = useParams()
  return (
    <div className={cn(styles.productInfo, className)}>
      <Title tag="h3" className={styles.title}>
        Финка
      </Title>

      <span>Диван Финка</span>

      <div className={styles.reviewsBox}>
        <Rating rating={rating} setRating={setRating} isEditable />
        <Link href={`${params}#reviews`}>Колличество отзывов</Link>
      </div>

      <div className={styles.priceBox}>
        <span className={styles.price}>{priceRu(price)}</span>
        <span className={styles.prevPrice}>{priceRu(price)}</span>
        <span className={styles.discount}>-10 %</span>
      </div>

      <ColorPicker colors={colors} />
    </div>
  )
}
