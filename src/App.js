import AdviceSection from './sections/Advice'
import UsersSection from './sections/Users'
import ArtsSection from './sections/Art'
import './styles.css'

function App() {

  return (
    <div className="app">
      <ArtsSection />
      <UsersSection />
      <AdviceSection />
    </div>
  )
}

export default App;