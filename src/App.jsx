import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  // const [artsData, setArtsData] = useState(null)

  // useEffect(() => {
  //   fetch('https://api.artic.edu/api/v1/artworks')
  //   .then(res => res.json())
  //   .then(data => setArtsData(data)) 
  // }, [])


  return (
    <div className="main-layout">
      <ArtsSection />
      <UsersSection />
      <AdviceSection />
    </div>
  )
}

export default App
