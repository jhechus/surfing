import FeaturedArticle from "./FeaturedArticle"

const Featureditems = ({ headline, items}) => {
  return (
    <section className='featured-items'>
        <h3 className="featured-items_headline">
            {headline || 'Our featured articles'}
        </h3>

        <div className="featured-items_container">
            {items.map((item) => (
                <FeaturedArticle key={item.slug} article={item} />
            ))}
        </div>
          
        
        <button className="btn btn-medium btn-turquoise"> See more </button>
    </section>
  )
}

export default Featureditems