import {
  Button,
  ColorPicker,
  DetailsDivProps,
  IColor,
  PriceBox,
  Rating,
  Title,
} from '@/shared'
import cn from 'classnames'
import styles from './ProductInfo.module.scss'
import { FC, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { priceRu } from '@/helpers'

interface ProductInfoProps extends DetailsDivProps {
  price: number
  colors: IColor[]
  fillers: string[]
}

export const ProductInfo: FC<ProductInfoProps> = ({
  className,
  price,
  colors,
  fillers,
}) => {
  const [rating, setRating] = useState(0)
  const params = useParams()
  return (
    <div className={cn(styles.productInfo, className)}>
      <div>
        <Title tag="h3" className={styles.title}>
          Финка
        </Title>
        <span className={styles.caption}>Диван Финка</span>
      </div>

      <div className={styles.reviewsBox}>
        <Rating rating={rating} setRating={setRating} isEditable />
        <Link href={`#`}>5 отзывов</Link>
      </div>

      <PriceBox price={price} />

      <ColorPicker colors={colors} />

      <div className={styles.fillerBox}>
        <span className={styles.fillerCaption}>Выбрать наполнение</span>
        <ul className={styles.fillerList}>
          {fillers.map((filler, idx) => (
            <li key={idx}>
              <Button className={styles.fillerBtn} appearance="ghost">
                {filler}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.deliveryBox}>
        <span className={styles.deliveryCaption}>Доставка</span>

        <table className={styles.deliveryTable}>
          <tbody>
            <tr className={styles.row}>
              <td>По Челябинску</td>
              <th>{priceRu(700)}</th>
            </tr>
            <tr>
              <td>По России</td>
              <th>от {priceRu(1000)}</th>
            </tr>
            <tr>
              <td>Самовывоз</td>
              <th>Бесплатно</th>
            </tr>
          </tbody>
        </table>
      </div>

      <Button className={styles.btn} appearance="primary">
        В корзину
      </Button>
    </div>
  )
}
