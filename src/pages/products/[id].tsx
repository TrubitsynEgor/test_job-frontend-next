import { IProducts } from '@/shared'
import { Header, ProductDetails } from '@/widgets'
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'
import { ParsedUrlQuery } from 'querystring'

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await fetch(`http://localhost:3001/products`)
  const products = await res.json()

  return {
    paths: products.map((product: IProducts) => ({
      params: { id: product.id.toString() },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<{
  product: IProducts
}> = async ({ params }) => {
  const res = await fetch(`http://localhost:3001/products/${params.id}`)
  const product = await res.json()

  return { props: { product } }
}

export default function Sofas({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header />

      <ProductDetails product={product} />
    </>
  )
}
