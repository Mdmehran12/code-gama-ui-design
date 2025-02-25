import "./GetInTouch.scss";
import appleStore from '../assets/images/app-store.png';
import googleStore from '../assets/images/play-store.png';
import arrow from '../assets/images/arrow.png';
import Linkedin from '../assets/images/LIND-MEDIA.png';
import X from '../assets/images/X-MEDIA.png';
import FooterImg from '../assets/images/footer-img.png';
export default function GetInTouch() {
    return (
        <>
            <div className="GetInTouch-container" style={{ backgroundImage: `url(${FooterImg})` }}>
                <div className="content">
                    <h1>Manage your sales and analytics at one place</h1>
                    <div className="section-container">
                        <div className="section">
                            <img src={arrow} alt="Arrow" />
                            <p>Empowering Your Projects, Enhancing Your Success, Every Step of the Way.</p>
                            <div className="social-icons">
                                <span>
                                    <img src={Linkedin} alt="Arrow" />
                                </span>
                                <span>
                                    <img src={X} alt="Arrow" />
                                </span>
                                <span>
                                    <img src={Linkedin} alt="Arrow" />
                                </span>
                            </div>
                        </div>

                        <div className="section">
                            <h2>Download our app</h2>
                            <button>
                                <img src={appleStore} alt="" />
                            </button>
                            <button>
                                <img src={googleStore} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <footer>
                    <a href="#">&#169; ripflow.in</a>
                    <a href="#">Privacy Policy</a>
                </footer>
            </div>
        </>
    );
}
