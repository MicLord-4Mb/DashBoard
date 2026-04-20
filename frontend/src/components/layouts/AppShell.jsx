import React, { useState } from 'react'
import './AppShell.css'
import Sidebar from '../section/Sidebar/Sidebar'
import TopBar from '../section/TopBar/TopBar'

const AppShell = ({ children, activePage, onNavigate, theme, onToggleTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={`app-shell${sidebarOpen ? ' sidebar-open' : ''}`}>
      <Sidebar
        activePage={activePage}
        onNavigate={onNavigate}
        onClose={() => setSidebarOpen(false)}
      />

      <TopBar
        onToggleSidebar={() => setSidebarOpen(prev => !prev)}
        activePage={activePage}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />

      <main className="main-content">
        {children}
      </main>
    </div>
  )
}

export default AppShell