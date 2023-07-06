'use client'
import styles from './ProductsList.module.scss'
import cn from 'classnames'
import { FC } from 'react'
import { Button, DetailsUlProps, IProducts } from '@/shared'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { priceRu } from '@/helpers'
import { BsHeart } from 'react-icons/bs'

interface ProductsListProps extends DetailsUlProps {
  products: IProducts[]
}

export const ProductsList: FC<ProductsListProps> = ({
  className,
  products,
}) => {
  const router = useRouter()
  return (
    <ul className={cn(styles.list, className)}>
      {products.map((el) => (
        <li key={el.id} className={styles.item}>
          <div className={styles.image}>
            <Image
              src={el.images[0].path}
              width={330}
              height={200}
              alt={`Product ${el.id}`}
              priority
            />
            <Button appearance="link">
              <BsHeart />
            </Button>
          </div>

          <span className={styles.title}>Диван Клик-кляк</span>

          <div className={styles.priceBlock}>
            <span className={styles.price}>{priceRu(el.price)}</span>
            <span className={styles.prevPrice}>{priceRu(el.price)}</span>
            <span className={styles.discount}>10%</span>
          </div>

          <Button
            className={styles.btn}
            appearance="ghost"
            onClick={() => router.push(`/sofas/${el.id}`)}
          >
            Посмотреть
          </Button>
        </li>
      ))}
    </ul>
  )
}
