import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useState } from 'react'

function App() {
  const init_artItems = []

  const [artItems, setArtItems] = useState([])
  const [users, setUsers] = useState([])
  const [advice, setAdvice] = useState([])

  return (
    <div className="main-layout">
      <ArtsSection />
      <UsersSection />
      <AdviceSection />
    </div>
  )
}

export default App
