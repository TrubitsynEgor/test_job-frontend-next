import { Container, DetailsDivProps, IProducts, Title } from '@/shared'
import { FC, useEffect, useState } from 'react'
import styles from './Similar.module.scss'
import cn from 'classnames'
import { Slider } from '@/features'
import { slidesPerView } from './consts'

interface SimilarProps extends DetailsDivProps {}

export const Similar: FC<SimilarProps> = ({ className }) => {
  const [products, setProducts] = useState<IProducts[]>([])
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then((products) => setProducts(products))
  }, [])

  return (
    <section className={cn(styles.similar, className)}>
      <Container>
        <Title>C этим товаром выбирают</Title>
        <Slider products={products} slidesPerView={slidesPerView} />
      </Container>
    </section>
  )
}
