import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

const API = '/api/avo'

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  const [length, setLength] = useState<Number>(0)

  useEffect(() => {
    window
      .fetch(API)
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
        setLength(length)
      })
  }, [])

  return (
    <div>
      <NavBar />
      <h1>Hello Platzi</h1>
      {productList.map((product: TProduct) => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}

export default Home
