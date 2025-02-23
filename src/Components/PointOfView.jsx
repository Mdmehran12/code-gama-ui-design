import { useState } from 'react';
import './PointOfView.scss';
import BottomDimondGrid from '../assets/images/bottom-dimond-grid.png';
import LapBanner from '../assets/images/lapbanner.png';
import CreatorView from '../assets/images/creator-view.png';
import UserView from '../assets/images/user-view.png';

function App() {
    const [activeTab, setActiveTab] = useState('creator');

    return (
        <div className="container-PointOfView">
            <h1 className="title">Focus on what matters</h1>
            <p className="subtitle">Checkout how both end of forms look like for our users</p>

            <div className="tab-container">
                <div
                    className="slider"
                    style={{
                        width: '47%',
                        transform: `translateX(${activeTab === 'creator' ? '4%' : '109%'})`
                    }}
                />
                <button
                    className={`tab ${activeTab === 'creator' ? 'active' : ''}`}
                    onClick={() => setActiveTab('creator')}
                >
                    <img width={28} src={CreatorView} alt="CreatorView" />
                    Creator View
                </button>
                <button
                    className={`tab ${activeTab === 'user' ? 'active' : ''}`}
                    onClick={() => setActiveTab('user')}
                >
                    <img width={28} src={UserView} alt="UserView" />
                    End User View
                </button>
            </div>

            {/* Content area for the selected view */}
            <div className="content">
                {activeTab === 'creator' ? (
                    <img src={LapBanner} className='povImage' alt="LapBanner" />
                ) : (
                    <img src={LapBanner} className='povImage' alt="LapBanner" />
                )}
            </div>
            {/* <img src={BottomDimondGrid} alt="BottomDimondGrid" /> */}
        </div>
    );
}

export default App;