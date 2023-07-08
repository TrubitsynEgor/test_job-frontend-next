'use client'
import { usePathname } from 'next/navigation'
import styles from './Products.module.scss'
import cn from 'classnames'
import { FC } from 'react'
import {
  Button,
  Container,
  DetailsUlProps,
  IProducts,
  Pagination,
  Title,
} from '@/shared'
import { convertPathName } from '@/helpers'
import { Barselona, ProductsList } from '@/entities'

interface ProductsProps extends DetailsUlProps {
  products: IProducts[]
}

export const Products: FC<ProductsProps> = ({ className, products }) => {
  const pathname = usePathname()

  return (
    <section className={cn(styles.products, className)}>
      <Container>
        <Title>{convertPathName(pathname.replace('/', ''))}</Title>
        <ProductsList products={products} />
      </Container>
      <Barselona />
      <Container>
        <ProductsList products={products} />
        <Button className={styles.btn} appearance="ghost">
          Посмотреть еще
        </Button>
        <Pagination />
      </Container>
    </section>
  )
}
