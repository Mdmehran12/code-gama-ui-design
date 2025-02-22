import './Featured.scss';
import RealTimeIcon from '../assets/images/icons-1.png';
import DetailedReportingIcon from '../assets/images/icons-2.png';
import CustomizableAlertsIcon from '../assets/images/icons-3.png';

const Featured = () => {
    const features = [
        {
            title: 'Real-Time Tracking',
            description: 'Monitor usage as it happens to stay updated with the latest data.',
            icon: RealTimeIcon,
        },
        {
            title: 'Detailed Reporting',
            description: 'Generate in-depth reports that provide insights into usage patterns and trends.',
            icon: DetailedReportingIcon,
        },
        {
            title: 'Customizable Alerts',
            description: 'Set up notifications for specific usage thresholds or unusual activity.',
            icon: CustomizableAlertsIcon
        },
    ];

    return (
        <section className="features">
            <div className="features__container">
                <div className="features__grid">
                    {features.map((feature, index) => (
                        <div key={index} className="features__item">
                            <div className="features__item-icon">
                                <img src={feature.icon} alt={feature.title} />
                            </div>
                            <h3 className="features__item-title">{feature.title}</h3>
                            <p className="features__item-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Featured;