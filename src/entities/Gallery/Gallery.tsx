import { Container, DetailsDivProps, IProductImage } from '@/shared'
import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './Gallery.module.scss'
import Image from 'next/image'

interface ProductDetailsProps extends DetailsDivProps {
  images: IProductImage[]
}

export const Gallery: FC<ProductDetailsProps> = ({ images, className }) => {
  const [idx, setIdx] = useState(0)

  return (
    <div className={cn(styles.gallery, className)}>
      <Container className={styles.container}>
        <Image
          className={styles.img}
          src={images[idx].path}
          alt="product image"
          width={720}
          height={400}
        />

        <ul className={styles.list}>
          {images.map((img, idx) => (
            <li key={img.id}>
              <Image
                className={styles.controlImg}
                onClick={() => setIdx(idx)}
                src={img.path}
                alt="product image"
                width={120}
                height={50}
              />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
