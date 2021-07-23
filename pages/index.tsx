import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

/* // This is for getting the loading in the server
//* Generating Server Side Rendering
export const getServerSideProps = async () => {
  const response = await fetch('https://avocato-nextjs.vercel.app/api/avo') //! We need to use an absolute URL
  const { data: productList }: TAPIAvoResponse = await response.json()
  return {
    props: {
      productList,
    },
  }
} */

//* Static render
// We need to generate a Build in this case
export const getStaticProps = async () => {
  //! We can only use in page components
  const response = await fetch('https://avocato-nextjs.vercel.app/api/avo') //! We need to use an absolute URL
  const { data: productList }: TAPIAvoResponse = await response.json()
  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
