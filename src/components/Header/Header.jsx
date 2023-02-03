import './header.css'
import JSON from '../../data.json'
import NavTabs from '../NavTabs/NavTabs'
import { SRC } from '../../sources'
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
      <img className='header-logo' src={SRC.Header[0]} alt='logo-space-tourism' />
      <div className='header-line'></div>
      <button onClick={() => setMenu(!menu)}>
        <img className='mobile-menu-icon' src={menu ? SRC.Header[1] : SRC.Header[2]} alt='menu' />
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