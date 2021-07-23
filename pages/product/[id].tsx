import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

/* We send to NextJS the pages that we are going to generate with the respective id
Because we are using the method StaticProps so we don't have external request in production for these ids */
export const getStaticPaths = async () => {
  //* We get all the static pages that NextJs is going to generate
  const response = await fetch('https://avocato-nextjs.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()
  const paths = productList.map(({ id }) => ({
    params: { id },
  }))
  return {
    paths,
    //! With the fallback, we have a 404 for everything else (pages out the paths array)
    fallback: false,
  }
}

//* Static dynamic render
// We need to add the type of the function for obtain the params
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(
    `https://avocato-nextjs.vercel.app/api/avo/${id}`
  ) //! We need to use an absolute URL
  const product: TProduct = await response.json()
  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
