import './BlogSuggestion.scss'

function BlogSuggestion() {
    return (
        <div className="blog-suggestion">
            <h1>Blogs and newsroom update </h1>
            <span>
                A community for India's investors hang out and talk about investments, personal finance
            </span>
            <div className="blog-grid">
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="blog" />
                    <div className="card-content">
                        <h3>How to invest in mutual funds</h3>
                        <span>by John Doe</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSuggestion;