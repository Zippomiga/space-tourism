import './header.css'
import cross from '../../assets/shared/icon-close.svg'
import hamburguer from '../../assets/shared/icon-hamburger.svg'
import JSON from '../../data.json'
import logo from '../../assets/shared/logo.svg'
import NavTabs from '../NavTabs/NavTabs'
import { useState } from 'react'


export default function Header({ surf }) {
  const [menu, setMenu] = useState(false)
  
  const headerTabs = Object.keys(JSON)

  function displayMenu(e) {
    setMenu(!menu)
    surf(e)
  }

  return (
    <header className='header-main-nav'>
      <img className='header-logo' src={logo} alt='logo-space-tourism' />
      <div className='header-line'></div>
      <button onClick={() => setMenu(!menu)}>
        <img className='mobile-menu-icon' src={menu ? cross : hamburguer} alt='menu' />
      </button>
      <NavTabs
        tabs={headerTabs}
        classNav={'header-nav ' + (menu ? 'show' : 'hidden')}
        classDiv='header-tab'
        onClick={displayMenu}
      />
    </header>
  )
}