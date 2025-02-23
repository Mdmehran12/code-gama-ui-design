import React from 'react';
import './AdvanceFeatures.scss';
import NotifcationImg from '../assets/images/notification.png'
import AISuggestionImg from '../assets/images/list-of-media.png'
import Barcodescan from '../assets/images/bar-code-scan.png'
function App() {
    return (
        <div className="AdvanceFeatures">
            <div className="features-grid">
                {/* Timely Alerts Section */}
                <div className="feature-card">
                    <h2>Timely alerts & sync ups</h2>
                    <p>Pick winning stocks confidently with 130+ filters or create your own goal-based screens</p>

                    <img src={NotifcationImg} alt="" className="advance-feature-img" />
                </div>

                {/* AI Optimization Section */}
                <div className="feature-card ai-optimization">
                    <h2>AI suggested optimisation</h2>
                    <p>Pick winning stocks confidently with 130+ filters or create your own goal-based screens</p>
                    <img src={AISuggestionImg} alt="" className="advance-feature-img" />
                </div>

                {/* Encrypted Section */}
                <div className="feature-card encrypted-section">
                    <h2>Encrypted integrations across</h2>
                    <p>Pick winning stocks confidently with 130+ filters or create your own goal-based screens</p>
                    <img src={Barcodescan} alt="" className="advance-feature-img" />
                </div>
            </div>
        </div>
    );
}

export default App;