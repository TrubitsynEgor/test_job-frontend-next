import { Container, DetailsDivProps, IProducts } from '@/shared'
import { FC } from 'react'
import cn from 'classnames'
import styles from './ProductDetails.module.scss'
import { Gallery, ProductInfo } from '@/entities'
import { colors, fillers } from './consts'

interface ProductDetailsProps extends DetailsDivProps {
  product: IProducts
}

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.box}>
          <Gallery images={product.images} />
          <ProductInfo
            price={product.price}
            colors={colors}
            fillers={fillers}
          />
        </div>
        <p className={styles.description}>
          Диван Финка невероятно мягкий и комфортабельный с простым механизмом.
          Его приятные округлые формы, благородная фактура обивки и лаконичный
          дизайн. Латы из натурального дерева создают ортопедический эффект,
          поддерживая правильную осанку. Три режима фиксации спинки. Задняя
          стенка дивана выполнена из ткани основы. Вместительный бельевой ящик
        </p>
      </Container>
    </section>
  )
}
