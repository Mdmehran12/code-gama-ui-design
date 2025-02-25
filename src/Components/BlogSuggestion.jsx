import './BlogSuggestion.scss'
import imgSection1 from '../assets/images/image-section-one.png'
import imgSection2 from '../assets/images/image-section-two.png'
import imgSection3 from '../assets/images/image-section-three.png'

function BlogSuggestion() {
    return (
        <div className="blog-suggestion">
            <div className="blog-section-header" style={{ paddingInline: '1rem' }}>
                <h1>Blogs and newsroom update </h1>
                <span>
                    A community for India's investors hang out and talk about investments, personal finance
                </span>
            </div>
            <div className="blog-grid">
                <div style={CardBackgroundStyle(imgSection1)} className="blog-card">
                    {/* <img src={imgSection1} alt="blog" /> */}
                    <div className="blog-card-content">
                        <h3>How to invest in mutual funds</h3>
                        <span>by Nation corp cadet</span>
                    </div>
                </div>
                <div style={CardBackgroundStyle(imgSection2)} className="blog-card">
                    {/* <img src={imgSection1} alt="blog" /> */}
                    <div className="blog-card-content">
                        <h3>How to invest in mutual funds</h3>
                        <span>by Nation corp cadet</span>
                    </div>
                </div>
                <div style={CardBackgroundStyle(imgSection3)} className="blog-card">
                    {/* <img src={imgSection1} alt="blog" /> */}
                    <div className="blog-card-content">
                        <h3>How to invest in mutual funds</h3>
                        <span>by Nation corp cadet</span>
                    </div>
                </div>
            </div>
        </div >
    )
}
const CardBackgroundStyle = (imgUrl) => ({ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' })
export default BlogSuggestion;