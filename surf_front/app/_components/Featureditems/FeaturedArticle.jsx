import Link from "next/link"

const FeaturedArticle = ({ article }) => {
  return (
    <Link 
        href={`/blog/${article.slug}`}
        className="featured-items_article"    
    >
        <div className="featured-items_article-img">
            <img 
                src={article.featuredImage} 
                alt={`Go to ${article.headline}`} 
            />
        </div>
        <div className="featured-items_article-text">
            <h5> {article.headline} </h5>
            <p className="copy-small"> {article.date} </p>
        </div>
    </Link> 

  )
}

export default FeaturedArticle