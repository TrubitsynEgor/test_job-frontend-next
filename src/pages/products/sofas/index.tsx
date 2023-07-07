import { IProducts } from '@/shared'
import { Header, Products } from '@/widgets'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<{
  products: IProducts[]
}> = async () => {
  const res = await fetch('http://localhost:3001/products/')
  const products = await res.json()
  return { props: { products } }
}

export default function Sofas({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header />
      <Products products={products} />
    </>
  )
}
