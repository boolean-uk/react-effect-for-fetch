import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [artData, setArtData] = useState([])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
    .then(response => response.json())
    .then(setArtData)
  }, [])

  console.log(artData)

  return (
    <div className="main-layout">
      <ArtsSection artData={artData}/>
      <UsersSection />
      <AdviceSection />
    </div>
  )
}

export default App
