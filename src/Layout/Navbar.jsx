import "./layoutStyles.scss"
import mainLogo from "../assets/images/LOGO.png"
const Navbar = () => {
    let nav = document.querySelector("nav");
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    }
    return (
        <div className="home">
                <div className="container">


                    <nav>
                        <div className="nav-content">
                            <div className="logo">
                                <a href="">
                                    <img src={mainLogo} alt="" />
                                </a>
                            </div>
                            <ul className="nav-links">
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Resources</a></li>
                                <li><a href="#">Comparison</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </nav>

                    {/* hero section starts from here */}
                    {/* <div className="hero-section-main">
                    <div className="hero-btn-tab">
                    Raised $ 1.5 Million fuding . 
                     <span> Read More</span> </div>
                    <div></div>
                    <div></div>
                    <div></div>


                </div> */}
                    <div className="container">

                        <div className="hero-section-main">
                            <div className="banner">
                                <div className="banner-content">
                                    <span>Raised $ 1.5 Million funding</span>
                                    <span className="separator">•</span>
                                    <span className="read-more">
                                        Read More {">"}
                                    </span>
                                </div>
                            </div>

                            <div className="main-content">
                                <h1>Manage your sales <br /> and analytics at one place</h1>

                                <p>The page you are looking for does not exist. <br /> Sign up for Framer to publish your own website.</p>

                                <div className="cta-buttons">
                                    <button className="btn btn-primary-1">Buy template</button>
                                    <button className="btn btn-secondary-1">Book Demo</button>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-circle circle-1"></div>
                        <div className="gradient-circle circle-2"></div>
                    </div>

                   

            </div>
        </div>
    )
}

export default Navbar
