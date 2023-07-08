import { IProducts } from '@/shared'
import { Footer, Header, Model3D, Products } from '@/widgets'
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
    <div className="wrapper">
      <Header />
      <main className="main">
        <Products products={products} />
        <Model3D />
      </main>
      <Footer />
    </div>
  )
}
