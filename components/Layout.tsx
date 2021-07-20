import React, { FC } from 'react'
import NavBar from './NavBar'

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
