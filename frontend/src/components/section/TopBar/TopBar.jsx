import React from 'react'

const TopBar = ({ onToggleTheme, theme }) => {
  return (
    <div className="topbar">
      {/* ... */}
      <button onClick={onToggleTheme} className="topbar__theme-btn">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      {/* ... */}
    </div>
  )
}

export default TopBar