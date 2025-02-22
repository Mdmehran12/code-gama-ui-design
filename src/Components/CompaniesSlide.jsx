import Netflix from '../assets/images/Item-5.png';
import Disney from '../assets/images/Item4.png';
import Airbnb from '../assets/images/item-2.png';
import Microsoft from '../assets/images/item-3.png';
import Duolingo from '../assets/images/Item-1.png';
import dashboardimg from "../assets/images/main-dashboard.png"

import "./index.scss"

const CompaniesSlide = () => {


    const companies = [
        {
            name: "Netflix",
            img: Netflix
        },
        {
            name: "Disney",
            logo: Disney
        },
        {
            name: "Airbnb",
            logo: Airbnb
        },
        {
            name: "Microsoft",
            logo: Microsoft
        },
        {
            name: "Duolingo",
            logo: Duolingo
        }
    ];
    return (
        <>
            <div className="hero-img">
                <div className="hero-img-container">
                    <img src={dashboardimg} alt="" /></div></div>
            <div className="container-slider">
                <div className="logo-slider">
                    <div className="logo-track">
                        {/* First set of logos */}
                        {companies.map((company, index) => (
                            <div key={`a-${index}`} className="logo-slide">
                                <img src={company.logo} alt={company.name} />
                            </div>
                        ))}
                        {/* Duplicate set for infinite scroll effect */}
                        {companies.map((company, index) => (
                            <div key={`b-${index}`} className="logo-slide">
                                <img src={company.logo} alt={company.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompaniesSlide
