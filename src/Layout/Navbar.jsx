import "./layoutStyles.scss"
import mainLogo from "../assets/images/LOGO.png"
import { useEffect, useRef } from "react";
const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (document.documentElement.scrollTop > 20) {
                navRef.current.classList.add("sticky");
            } else {
                navRef.current.classList.remove("sticky");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="home">
            <div className="container">
                <nav ref={navRef}>
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
    );
};

export default Navbar;