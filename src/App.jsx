
import './App.css'
import './common.scss'
import CompaniesSlide from './Components/CompaniesSlide'
import ManageDashboard from './Components/ManageDashboard'
// import Home from './Components/Home'
import Navbar from './Layout/Navbar'
function App() {

  return (
    <>
      

        <Navbar />
        {/* <Home /> */}
        <CompaniesSlide/>
        <ManageDashboard/>


    </>
  )
}

export default App
