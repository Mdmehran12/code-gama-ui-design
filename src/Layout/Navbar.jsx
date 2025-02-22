import "./layoutStyles.scss"
import mainLogo from "../assets/images/LOGO.png"
import { useEffect, useRef } from "react";
const Navbar = ({ children }) => {
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
                {children}
            </div>
        </div>
    );
};

export default Navbar;