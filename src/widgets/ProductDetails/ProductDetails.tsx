import { Container, DetailsDivProps, IProducts } from '@/shared'
import { FC } from 'react'
import cn from 'classnames'
import styles from './ProductDetails.module.scss'
import { Gallery, ProductInfo } from '@/entities'
import { colors } from './consts'

interface ProductDetailsProps extends DetailsDivProps {
  product: IProducts
}

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <section>
      <Container className={styles.container}>
        <Gallery images={product.images} />
        <ProductInfo price={product.price} colors={colors} />
      </Container>
    </section>
  )
}
