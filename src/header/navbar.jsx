import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import viteLogo from '/vite.svg'

{/*import { ReactComponent as Hamburger } from '../assets/logo.svg'; */}

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container-header">
        <div className="menu-icon" onClick={handleShowNavbar}>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <div style={{ margin: 'auto', color: '#4cc9f0', fontSize: '1.2rem' }}>Home</div>
        {/*  <Hamburger /> */}
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar