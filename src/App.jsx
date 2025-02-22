
import './App.css'
import './common.scss'
import CompaniesSlide from './Components/CompaniesSlide'
import Featured from './Components/Featured'
import Home from './Components/Home'
import ManageDashboard from './Components/ManageDashboard'
import SubscriptionTracker from './Components/SubscriptionTracker'
// import Home from './Components/Home'
import Navbar from './Layout/Navbar'
function App() {

  return (
    <>
      <Navbar>
        <Home />
      </Navbar>
      <ManageDashboard />
      <CompaniesSlide />
      <SubscriptionTracker />
      <Featured />
    </>
  )
}

export default App
