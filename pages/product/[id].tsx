import React, { useEffect, useState } from 'react'
//* This is a hook for take the pagination or the URL
import { useRouter } from 'next/router'

const API = '/api/avo'

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter()
  const [avo, setAvo] = useState<any>({})

  useEffect(() => {
    window
      .fetch(`${API}/${id}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <div>
      {/* Router and query come from NextJS, but Id is the name of the file */}
      These is the page {id}
      <div>This is the selected avocado</div>
      <h1>{avo.name}</h1>
    </div>
  )
}

export default ProductItem
