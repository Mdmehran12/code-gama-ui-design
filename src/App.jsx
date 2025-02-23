
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
import TestimonialCarousel from './Components/Testimonial'
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
      <CompaniesSlide />
      <TestimonialCarousel />
    </>
  )
}

export default App
