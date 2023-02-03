import './nav-tabs.css'
import { useState } from 'react'


export default function NavTabs({ tabs, classNav, classDiv, onClick }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const head_or_dest = classDiv === 'header-tab' || classDiv === 'destination-tab'

  function getButtonClass(item) {
    return selectedTab === item
      ? head_or_dest
        ? 'active-H-D'
        : 'active-C-T'
      : ''
  }

  function handleTabClick(e, item) {
    onClick(e)
    setSelectedTab(item)
  }

  return (
    <nav className={classNav}>
      {
        tabs.map((tab, i) => (
          <button
            key={i}
            id={tab}
            onClick={e => handleTabClick(e, tab)}
            className={`${classDiv} ${getButtonClass(tab)}`}
          >
            {
              classDiv === 'header-tab' ? (
                <>
                  <span id={tab}>
                    {tab.slice(0, 2)}
                  </span>
                  {tab.slice(3)}
                </>
              ) : tab
            }
          </button>
        ))
      }
    </nav>
  )
}