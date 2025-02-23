import React from 'react';
import './TrackFeature.scss';
import HistoryCard from '../assets/images/history-card.png';
import CombineCard from '../assets/images/combine-card.png';
import ReminderCard from '../assets/images/date-card.png';

function App() {
    return (
        <div className="app">
            <header className="header">
                <h1>Track what<br />matters to you</h1>
            </header>

            <div className="cards-container">
                <div className="card">
                    <div className="text-content">
                        <h2>Transactions</h2>
                        <p>Pick winning stocks confidently with 130+ filters or create your own</p>
                    </div>
                    <img src={HistoryCard} alt="Transactions" />
                </div>

                <div className="card">
                    <div className="text-content">
                        <h2>Friends and family</h2>
                        <p>Pick winning stocks confidently with 130+ filters or create your own</p>
                    </div>
                    <img src={CombineCard} alt="Transactions" />
                </div>

                <div className="card">
                    <div className="text-content">
                        <h2>Timely reminders</h2>
                        <p>Pick winning stocks confidently with 130+ filters or create your own</p>
                    </div>
                    <img src={ReminderCard} alt="Transactions" />
                </div>
            </div>
        </div>
    );
}

export default App;