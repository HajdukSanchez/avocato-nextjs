import React, { FC } from 'react'
import NavBar from '@components/NavBar'

const Layout: FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <footer>This is the footer</footer>
    </div>
  )
}

export default Layout
