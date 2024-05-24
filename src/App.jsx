import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useState } from 'react'

function App() {
  const[baseUrl, setbaseUrl] = useState("https://boolean-uk-api-server.fly.dev/")
  //render comps and pass props
  return (
    <div className="main-layout">
      <ArtsSection baseUrl={baseUrl}/>
      <UsersSection />
      <AdviceSection />
    </div>
  )
}

export default App
