import React from 'react';
import './ComparisonTable.scss';

const features = [
    'Dynamic copies for questions',
    'Auto-sequence of questions',
    'Followup questions on the basis',
    'AI thank you and start screen',
    'AI report generation with all important'
];

const products = ['Metaforms', 'Typeform', 'Typeform', 'Typeform'];

function ComparisonTable() {
    return (
        <div className="comparison-container">
            <h1 className="title">Focus on what matters</h1>

            <div className="table-container">
                <table className="comparison-table">
                    <thead>
                        <tr>
                            <th></th>
                            {products.map((product, index) => (
                                <th key={index} className={`product-header ${index === 0 ? 'line-effect' : ''}`}>
                                    {product}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr key={index} className="feature-row ">
                                <td>{feature}</td>
                                <td className="metaforms-column">
                                    ✔️
                                </td>
                                {[...Array(3)].map((_, i) => (
                                    <td key={i}>
                                        x
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ComparisonTable;