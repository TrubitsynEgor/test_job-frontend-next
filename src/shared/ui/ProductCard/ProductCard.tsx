import { Button, PriceBox } from '@/shared'
import { FC, useState, useEffect, useLayoutEffect } from 'react'
import styles from './ProductCard.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface ProductCardProps {
  className: string
  img: string
  price: number
  id: number
}

export const ProductCard: FC<ProductCardProps> = ({
  className,
  img,
  price,
  id,
}) => {
  const router = useRouter()

  const handleOrder = (id: number) => {
    router.push(`${id}`)
    //todo Реализовать скролл после нажатия кнопки
  }
  return (
    <div className={cn(styles.productCard, className)}>
      <Image
        className={styles.img}
        src={img}
        alt="Фото продута"
        width={280}
        height={280}
      />
      <span className={styles.name}>Имя товара № {id}</span>

      <PriceBox className={styles.priceBox} price={price} />

      <Button
        onClick={() => handleOrder(id)}
        className={styles.btn}
        appearance="ghost"
      >
        Заказать
      </Button>
    </div>
  )
}
