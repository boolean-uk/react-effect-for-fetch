import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
export const API_URL = 'https://boolean-uk-api-server.fly.dev/'
function App() {
  return (
    <div className="main-layout">
      <ArtsSection />
      <UsersSection />
      <AdviceSection />
    </div>
  )
}

export default App
