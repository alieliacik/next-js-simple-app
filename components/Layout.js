import styles from '../styles/Layout.module.css'
import Header from './Header'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>
          <Header />
          <h1>Main Content</h1>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
