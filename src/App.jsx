import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'


function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
  )
}
export default App
