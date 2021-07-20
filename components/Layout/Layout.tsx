import React, { FC } from 'react'
import NavBar from '@components/NavBar/NavBar'
/* import styles from './Layout.module.css' */

const Layout: FC = ({ children }) => {
  return (
    <div className="container">
      {/* <div className={styles.container}> */}
      <NavBar />
      {children}
      <footer>This is the footer</footer>

      {/* CSS in JS */}
      <style jsx>{`
        .container {
          background-color: salmon;
        }
      `}</style>
    </div>
  )
}

export default Layout
