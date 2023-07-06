import { IProducts } from '@/shared'
import { Header, Products } from '@/widgets'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps<{
  repo: IProducts[]
}> = async () => {
  const res = await fetch('http://localhost:3001/products/')
  const repo = await res.json()
  return { props: { repo } }
}

export default function Sofas({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header />
      <Products products={repo} />
    </>
  )
}
