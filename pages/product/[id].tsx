import React from 'react'
//* This is a hook for take the pagination or the URL
import { useRouter } from 'next/router'

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter()
  return (
    <div>
      {/* Router and query come from NextJS, but Id is the name of the file */}
      These is the page {id}
    </div>
  )
}

export default ProductItem
