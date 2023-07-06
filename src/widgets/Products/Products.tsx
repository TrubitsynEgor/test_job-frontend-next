'use client'
import { usePathname } from 'next/navigation'
import styles from './Products.module.scss'
import cn from 'classnames'
import { FC } from 'react'
import { Container, DetailsUlProps, IProducts, Title } from '@/shared'
import { convertPathName } from '@/helpers'
import { ProductsList } from '@/entities'

interface ProductsProps extends DetailsUlProps {
  products: IProducts[]
}

export const Products: FC<ProductsProps> = ({ className, products }) => {
  const pathname = usePathname()

  return (
    <div className={cn(styles.products, className)}>
      <Container>
        <Title>{convertPathName(pathname.replace('/', ''))}</Title>
        <ProductsList products={products} />
      </Container>
    </div>
  )
}
