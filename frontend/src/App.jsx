import { useState, useEffect } from 'react'
import './App.css'
import AppShell from './components/layouts/AppShell'
import Dashboard from './components/pages/Dashboard'
import Projects from './components/pages/Projects'
import Tasks from './components/pages/Tasks'
import Members from './components/pages/Members'
 
const PAGES = {
  home: Dashboard,
  board: Projects,
  chat: Tasks,
  calendar: Members,
  template: Members,
  account: Members,
  settings: Members,
}
 
function App() {
  const [activePage, setActivePage] = useState('home')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('tb-theme') || 'dark'
  })
 
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('tb-theme', theme)
  }, [theme])
 
  const PageComponent = PAGES[activePage] || Dashboard
 
  return (
    <AppShell
      activePage={activePage}
      onNavigate={setActivePage}
      theme={theme}
      onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
    >
      <PageComponent />
    </AppShell>
  )
}
 
export default App