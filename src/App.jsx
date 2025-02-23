
import './App.css'
import './common.scss'
import CompaniesSlide from './Components/CompaniesSlide'
import Featured from './Components/Featured'
import Home from './Components/Home'
import ManageDashboard from './Components/ManageDashboard'
import SubscriptionTracker from './Components/SubscriptionTracker'
import AdvanceFeatures from './Components/AdvanceFeatures'
import TrackFeature from './Components/TrackFeature'
import PointOfView from './Components/PointOfView'

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
      <AdvanceFeatures />
      <TrackFeature />
      <PointOfView />
    </>
  )
}

export default App
