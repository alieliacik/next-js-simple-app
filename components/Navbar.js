// import navbarStyles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
