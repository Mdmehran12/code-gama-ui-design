import React from 'react';
import './SubscriptionTracker.scss';
import Bolt from '../assets/images/offline-bolt.svg';
import Paper from '../assets/images/paper.svg';
import Compare from '../assets/images/compare.svg';
import ArrowRight from '../assets/images/arrow-right.svg';
import ManageDashboard from '../assets/images/manage-dashboard-2.png';

function SubscriptionTracker() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="content-wrapper">
          <div className="content-left">
            <div className="subscription-tracker">
              <h1>Keep track of all usage</h1>
              <p>Tracking All Usages for Efficient Management and Comprehensive Oversight.</p>

              <div className="features-1">
                <div className="feature">
                  <img height={22} src={Bolt} alt="Comprehensive Usage Monitoring" />
                  <span>Comprehensive Usage Monitoring</span>
                </div>
                <div className="feature">
                  <img height={22} src={Compare} alt="Efficient Management" />
                  <span>Efficient Management</span>
                </div>
                <div className="feature">
                  <img height={22} src={Paper} alt="Enhanced Oversight" />
                  <span>Enhanced Oversight</span>
                </div>
              </div>

              <a href="#" className="cta-button">
                Go to Watchlist
                <img src={ArrowRight} alt=">" />
              </a>
            </div>
          </div>

          <div className="content-right">
            <img src={ManageDashboard} alt="Subscription Tracker" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionTracker;