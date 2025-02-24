import React from 'react';
import './ComparisonTable.scss';
import ComparisonTableImg from '../assets/images/comparison-table.png'
import ProductHuntRanking from '../assets/images/Ranking position.png'
import ProCertification from '../assets/images/pro-certificate.png'


function ComparisonTable() {
    return (
        <div className="comparison-container">
            <h1 className="title">Focus on what matters</h1>
            <div className="table-container">
                <img src={ComparisonTableImg} alt="ComparisonTableImg" />
            </div>
            <div className="product-achievement">
                <div className="product-hunt-achievemt-container">
                    <div className="product-hunt-achievemt">
                        <img src={ProductHuntRanking} alt="ProductHuntRanking" />
                        <img src={ProCertification} alt="ProCertification" />
                    </div>
                </div>
                <div className="achievemt-numerics">
                    <div className="love-tickers">
                        <h3>
                            40,000,000+
                        </h3>
                        <span>
                            USERS LOVE TICKERTAPE
                        </span>
                    </div>
                    <div className="love-tickers">
                        <h3>
                            4.6
                        </h3>
                        <span>
                            GOOGLE PLAY RATING
                        </span>
                    </div>
                    <div className="love-tickers">
                        <h3>
                            100cr+
                        </h3>
                        <span>
                            TRANSATION VOLUME
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ComparisonTable;